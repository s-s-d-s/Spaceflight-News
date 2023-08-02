import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from '@app/module/article-details/article-details.component';
import { ArticleDetailsRoutingModule } from '@app/module/article-details/article-details-routing.module';
import { ArticleApiService } from '@app/services/api/article-api.service';
import { ArticleDetailsResolver } from '@app/resolvers/article-details.resolver';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ArticleDetailsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [
    ArticleDetailsComponent,
  ],
  exports: [
    ArticleDetailsComponent,
  ],
  providers: [
    ArticleApiService,
    ArticleDetailsResolver
  ],
})
export class ArticleDetailsModule {
}
