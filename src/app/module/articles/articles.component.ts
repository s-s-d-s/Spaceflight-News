import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BaseUnsubscribeComponent } from "@app/components/base-unsubscribe/base-unsubscribe.component";
import { FormControl } from "@angular/forms";
import { BehaviorSubject, takeUntil} from "rxjs";
import { ArticleModel, RageResultArticleModel} from "@app/model/article.model";
import { ActivatedRoute } from "@angular/router";
import {QueryParams} from "@app/model/query-params.model";
import {ArticleApiService} from "@app/services/api/article-api.service";

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesComponent extends BaseUnsubscribeComponent implements OnInit {
  articles: RageResultArticleModel = this.route.snapshot.data['articles'];
  articlesSubject: BehaviorSubject<ArticleModel[]> = new BehaviorSubject<ArticleModel[]>(this.articles.results);

  searchControl: FormControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private articleApiService: ArticleApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(takeUntil(this.destroyed)).subscribe(() => this.searchArticles());
  }

  searchArticles(): void {
    const queryParams: QueryParams = { searchData: this.searchControl.value };
    this.articleApiService.getArticles(queryParams).pipe(takeUntil(this.destroyed)).subscribe(articles => this.articlesSubject.next(articles.results))
  }
}
