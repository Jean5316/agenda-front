import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth";
import { catchError, throwError } from "rxjs";
import { Router } from "@angular/router";



export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authService = inject(AuthService)
  const router = inject(Router)

  const token = authService.getToken();

  //adiciona token no header
  if(token){
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

    return next(req).pipe(
      catchError(error => {
        if(error.status == 401){
          authService.logout();
          router.navigate(['/login']);
        }

        return throwError(() => error);
      })
    )
}

