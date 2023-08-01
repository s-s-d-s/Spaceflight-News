import { Injectable } from '@angular/core';
import { BaseHttpService } from '@app/services/base-http.service';
import { Observable } from "rxjs";
import { EndpointsConstants } from "@app/constants/endpoints.constant";
import { ArticleModel } from "@app/model/article.model";
import { QueryParams } from "@app/model/query-params.model";

@Injectable()
export class ArticleApiService {
  constructor(
    private baseHttpService: BaseHttpService
  ) {
  }

  getArticles(queryParams?: QueryParams): Observable<ArticleModel[]>{
    const url: string = EndpointsConstants.ARTICLES;
    return this.baseHttpService.doGet<ArticleModel[]>(url, queryParams);
  }
}
