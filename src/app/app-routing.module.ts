import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RoutingArticleDetails,
  RoutingArticlesRoot,
  RoutingDefault,
  RoutingWrong
} from '@app/constants/routing.constant';

const routes: Routes = [
  {
    path: RoutingDefault,
    children: [
      {
        path: RoutingDefault,
        pathMatch: 'full',
        redirectTo: RoutingArticlesRoot,
      },
      {
        path: RoutingArticlesRoot,
        loadChildren: () => import('@app/module/articles/articles.module').then(r => r.ArticlesModule),
      },
      {
        path: RoutingArticleDetails,
        loadChildren: () => import('@app/module/article-details/article-details.module').then(r => r.ArticleDetailsModule),
      },
      {
        path: RoutingWrong,
        redirectTo: RoutingArticlesRoot,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
