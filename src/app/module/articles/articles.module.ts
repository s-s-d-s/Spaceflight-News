import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticlesRoutingModule } from "@app/module/articles/articles-routing.module";
import { ArticlesComponent } from "@app/module/articles/articles.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { ArticleCardsModule } from "@app/components/article-cards/article-cards.module";

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    ArticleCardsModule,
  ],
  declarations: [
    ArticlesComponent,
  ],
  exports: [
    ArticlesComponent,
  ],
  providers: [
  ],
})
export class ArticlesModule {
}
