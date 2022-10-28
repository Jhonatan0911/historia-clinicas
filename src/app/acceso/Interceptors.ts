import { Injectable, Inject } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class Interceptor implements HttpInterceptor {
  constructor(
    public cookieService: CookieService,
    private router: Router,
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJQcm9maWxlIjoiYWRtaW5pc3RyYWRvciIsIlByb2ZpbGVJZCI6Ik9maWNpbmFfQWRtaW4iLCJVc2VyTmFtZSI6Illlc2lkIEd1em1hbiIsIlVzZXIiOiJ5Z3V6bWFuIiwiVXNlcklkIjoibWVyY3VyeSIsIkVtYWlsIjoicHJ1ZWJhQGFzZC5jb20iLCJpYXQiOjE2NjY5MTMxMDgsImV4cCI6MTY2Njk0MTkwOCwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI1NCIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyNTQifQ.x-WCxfEnslhyJtEEwCDtPuIMteKaL2i_c5e5naZRNw0" ?? "";
    let request = req;
    if (token) {
        request = req.clone({
          setHeaders: {
            authorization: `Bearer ${token}`,
          },
        });
    }

    return next.handle(request).pipe(

      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl("/");
        }
        if (err.status === 403) {
          this.router.navigateByUrl("/");
        }
        return throwError(err);
      })
    );
  }
}
