import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleApiService } from '@app/services/api/article-api.service';
import { ArticleModel } from '@app/model/article.model';

@Injectable()
export class ArticleDetailsResolver implements Resolve<ArticleModel> {
  constructor(private articleApiService: ArticleApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ArticleModel> {
    const articleId: number = route.params.id;
    return this.articleApiService.getArticleById(articleId);
  }
}
