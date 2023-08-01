import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticlesRoutingModule } from "@app/module/articles/articles-routing.module";
import { ArticlesComponent } from "@app/module/articles/articles.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { ArticleCardsModule } from "@app/components/article-cards/article-cards.module";
import { MatInputModule } from "@angular/material/input";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ArticleCardsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    TranslateModule,
    ReactiveFormsModule,
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
