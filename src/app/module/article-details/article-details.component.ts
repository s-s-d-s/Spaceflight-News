import { Component } from "@angular/core";
import { ArticleModel } from "@app/model/article.model";
import { ActivatedRoute, Router } from "@angular/router";
import { RoutingArticlesRoot } from "@app/constants/routing.constant";

@Component({
  selector: 'article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent {
  article: ArticleModel = this.route.snapshot.data['article'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  goToArticles(): void {
    this.router.navigate([RoutingArticlesRoot]);
  }
}
