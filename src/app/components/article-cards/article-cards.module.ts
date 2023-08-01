import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { ArticleCardsComponent}  from "@app/components/article-cards/article-cards.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TruncatePipe } from "../../pipes/truncate.pipe";

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
  ],
})
export class ArticleCardsModule {
}