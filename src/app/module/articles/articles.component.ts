import { Component, ViewEncapsulation } from "@angular/core";
import { BaseUnsubscribeComponent } from "@app/components/base-unsubscribe/base-unsubscribe.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesComponent extends BaseUnsubscribeComponent {

  constructor(
    private translateService: TranslateService,
  ) {
    super();
    console.log()
  }
}
