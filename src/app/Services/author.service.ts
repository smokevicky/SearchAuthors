import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AUTHOR_API_ENDPOINTS } from '../Constants/author-api-endpoints';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private _http: Http
  ) { }

  generateUrl(api: string, authorCode: string): string {
    return api.replace('AUTHOR_CODE', authorCode);
  }

  getAuthorDetails(authorCode: string): Observable<any> {

    const url = this.generateUrl(AUTHOR_API_ENDPOINTS.getAuthorSummary, authorCode);

    return this._http.get(url);
  }

  getAuthorWorks(authorCode: string): Observable<any> {
    const url = this.generateUrl(AUTHOR_API_ENDPOINTS.getAuthorWorkDetails, authorCode);

    return this._http.get(url);
  }

}
