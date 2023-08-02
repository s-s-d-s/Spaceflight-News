import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RageResultArticleModel } from "@app/model/article.model";
import { ArticleApiService } from "@app/services/api/article-api.service";

@Injectable()
export class ArticlesResolver implements Resolve<RageResultArticleModel> {
  constructor(private articleApiService: ArticleApiService) {
  }

  resolve(): Observable<RageResultArticleModel> {
    return this.articleApiService.getArticles();
  }
}
