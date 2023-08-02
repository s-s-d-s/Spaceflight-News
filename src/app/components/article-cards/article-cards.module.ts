import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { ArticleCardsComponent}  from "@app/components/article-cards/article-cards.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TruncatePipe } from "../../pipes/truncate.pipe";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ArticleCardsComponent,
    TruncatePipe,
  ],
  exports: [
    ArticleCardsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    NgOptimizedImage,
  ],
})
export class ArticleCardsModule {
}
