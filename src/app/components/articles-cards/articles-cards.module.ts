import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ArticlesCardsComponent}  from '@app/components/articles-cards/articles-cards.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TruncatePipe } from '@app/pipes/truncate.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightPipe } from '@app/pipes/highlight.pipe';

@NgModule({
  declarations: [
    ArticlesCardsComponent,
    TruncatePipe,
    HighlightPipe,
  ],
  exports: [
    ArticlesCardsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class ArticlesCardsModule {
}
