import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArticleModel } from '@app/model/article.model';
import { Router } from '@angular/router';
import { RoutingArticlesRoot } from '@app/constants/routing.constant';

@Component({
  selector: 'articles-cards',
  templateUrl: './articles-cards.component.html',
  styleUrls: ['./articles-cards.component.scss'],
})
export class ArticlesCardsComponent {
  readonly defaultDateFormat: string = 'MMMM d, y';

  @Input() articlesSubject: BehaviorSubject<ArticleModel[]> = new BehaviorSubject<ArticleModel[]>([]);
  @Input() searchData: string = '';

  constructor(
    private router: Router,
  ) {
  }

  goToArticle(id: number): void {
    this.router.navigate([`${RoutingArticlesRoot}/${id}`]);
  }
}
