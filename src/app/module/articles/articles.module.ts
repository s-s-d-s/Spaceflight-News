import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from '@app/module/articles/articles-routing.module';
import { ArticlesComponent } from '@app/module/articles/articles.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ArticlesCardsModule } from '@app/components/articles-cards/articles-cards.module';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleApiService } from '@app/services/api/article-api.service';
import { ArticlesResolver } from '@app/resolvers/articles.resolver';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ArticlesCardsModule,
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
    ArticleApiService,
    ArticlesResolver
  ],
})
export class ArticlesModule {
}
