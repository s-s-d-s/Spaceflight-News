import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpEventType, HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequestBody } from '@app/model/http-request-body.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingArticlesRoot } from '@app/constants/routing.constant';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {
  }

  intercept(request: HttpRequest<HttpRequestBody>, next: HttpHandler): Observable<HttpEvent<HttpEventType>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.error.detail) {
          this.router.navigate([RoutingArticlesRoot]);
        }
          return throwError(() => errorResponse);
      })
    );
  }
}
