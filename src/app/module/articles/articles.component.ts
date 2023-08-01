import { Component, ViewEncapsulation } from "@angular/core";
import { BaseUnsubscribeComponent } from "@app/components/base-unsubscribe/base-unsubscribe.component";

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesComponent extends BaseUnsubscribeComponent {
  title: string = "Rocket Lab’s Electron faces rare last second abort";
  descriptionText: string = "Rocket Lab’s 40th mission will have to wait a bit longer, as the Electron rocket ignited its 9 Rutherford engines and immediately...";

}
