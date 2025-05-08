import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const excludedUrls = [`${environment.baseEndpoint}/sign_in`];

    if (excludedUrls.some((url) => req.url.includes(url))) {
      return next.handle(req);
    }

    const token = localStorage.getItem('token');
    let clonedRequest = req;

    if (token) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(clonedRequest);
  }
}