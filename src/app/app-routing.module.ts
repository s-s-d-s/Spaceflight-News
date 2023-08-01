import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingArticlesRoot, RoutingDefault } from "@app/constants/routing.constant";

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
