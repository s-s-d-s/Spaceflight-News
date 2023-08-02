import { Component, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ArticleModel } from "@app/model/article.model";

@Component({
  selector: 'article-cards',
  templateUrl: './article-cards.component.html',
  styleUrls: ['./article-cards.component.scss'],
})
export class ArticleCardsComponent {
  @Input() articlesSubject: BehaviorSubject<ArticleModel[]> = new BehaviorSubject<ArticleModel[]>([]);
}
