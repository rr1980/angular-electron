﻿// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { _throw } from 'rxjs/observable/throw';
// import 'rxjs/add/operator/catch';
// import { HttpException } from 'HttpException';

// /**
//  * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
//  * and extract the relevant information of it.
//  */
// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//     /**
//      * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
//      * @see HttpInterceptor
//      * @param req the outgoing HTTP request
//      * @param next a HTTP request handler
//      */
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(req)
//             .catch(errorReponse => {
//                 if (errorReponse instanceof HttpErrorResponse) {
//                     //const err = errorReponse.message || JSON.stringify(errorReponse.error);
//                     //errMsg = `${errorReponse.status} - ${errorReponse.statusText || ''} Details: ${err}`;
//                     return _throw(new HttpException(errorReponse));

//                 } else {
//                     //errMsg = errorReponse.message ? errorReponse.message : errorReponse.toString();
//                     return _throw(new HttpException(errorReponse));
//                 }
//             });
//     }
// }

// /**
//  * Provider POJO for the interceptor
//  */
// export const ErrorInterceptorProvider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: ErrorInterceptor,
//     multi: true,
// };