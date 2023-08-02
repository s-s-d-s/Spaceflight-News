import { Injectable } from '@angular/core';
import { BaseHttpService } from '@app/services/base-http.service';
import { Observable } from "rxjs";
import { EndpointsConstants } from "@app/constants/endpoints.constant";
import { RageResultArticleModel } from "@app/model/article.model";
import { QueryParams } from "@app/model/query-params.model";

@Injectable()
export class ArticleApiService {
  constructor(
    private baseHttpService: BaseHttpService
  ) {
  }

  getArticles(queryParams?: QueryParams): Observable<RageResultArticleModel>{
    const url: string = EndpointsConstants.ARTICLES;
    return this.baseHttpService.doGet<RageResultArticleModel>(url, queryParams);
  }
}
