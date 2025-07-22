import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

const API_BASE_URL = 'https://49bb6111-72eb-4f2c-ae70-9cef041a8c48.mock.pstmn.io';

@Injectable()
export class ApiBaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiReq = req.clone({
      url: req.url.startsWith('http') ? req.url : API_BASE_URL + req.url,
      responseType: 'json'
    });

    const id = apiReq.body?.studentId || 'unknown';
    const timestamp = Date.now().toString();
    const sessionID = btoa(timestamp + id);
    apiReq = apiReq.clone({
      headers: apiReq.headers.set('sessionID', sessionID)
    });

    return next.handle(apiReq).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
