import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleModel } from "@app/model/article.model";
import { ArticleApiService } from "@app/services/api/article-api.service";

@Injectable()
export class ArticlesResolver implements Resolve<ArticleModel[]> {
  constructor(private articleApiService: ArticleApiService) {
  }

  resolve(): Observable<ArticleModel[]> {
    return this.articleApiService.getArticles();
  }
}
