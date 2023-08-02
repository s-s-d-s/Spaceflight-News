import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingDefault } from '@app/constants/routing.constant';
import { ArticleDetailsComponent } from "@app/module/article-details/article-details.component";
import { ArticleDetailsResolver } from "@app/resolvers/article-details.resolver";

export const routes: Routes = [
  {
    path: RoutingDefault,
    component: ArticleDetailsComponent,
    resolve: {
      article: ArticleDetailsResolver,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ArticleDetailsRoutingModule {
}
