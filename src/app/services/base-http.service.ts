import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryParams } from '@app/model/query-params.model';
import { QueryParamsConstants } from '@app/constants/query-params.constants';

@Injectable()
export class BaseHttpService {
  readonly defaultRequestLimit: string = '12';

  constructor(private http: HttpClient) { }

  doGet<T>(url: string, queryParams?: QueryParams): Observable<T> {
    return this.http.get<T>(url, { params: this.getHttpParams(queryParams) });
  }

  private getHttpParams(queryParams: QueryParams | undefined): HttpParams {
    let httpParams: HttpParams = new HttpParams();

    if (queryParams?.searchData) {
      const keywordsArray: string[] = queryParams.searchData.split(' ');
      const formattedKeywords: string = keywordsArray.join(', ');

      httpParams = httpParams.append(QueryParamsConstants.limit, this.defaultRequestLimit);
      httpParams = httpParams.append(QueryParamsConstants.titleContainsOne, formattedKeywords);
      httpParams = httpParams.append(QueryParamsConstants.summaryContainsOne, formattedKeywords);
    }

    return httpParams;
  }
}
