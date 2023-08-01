import { Component } from "@angular/core";

@Component({
  selector: 'article-cards',
  templateUrl: './article-cards.component.html',
  styleUrls: ['./article-cards.component.scss'],
})
export class ArticleCardsComponent {
  title: string = "Rocket Lab’s Electron faces rare last second abort";
  descriptionText: string = "Rocket Lab’s 40th mission will have to wait a bit longer, as the Electron rocket ignited its 9 Rutherford engines and immediately...";
}
