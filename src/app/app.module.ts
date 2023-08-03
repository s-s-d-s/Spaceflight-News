import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { appInitializerFactory } from '@app/services/initializer.factory';
import { BaseHttpService } from '@app/services/base-http.service';
import { SpinnerService } from '@app/services/spinner.service';
import { SpinnerInterceptor } from '@app/interceptors/spinner.interceptor';
import { SpinnerModule } from '@app/components/spinner/spinner.module';
import { ExceptionInterceptor } from "@app/interceptors/exception.interceptor";

const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [
          HttpClient,
        ],
      },
    }),
    SpinnerModule,
  ],
  providers: [
    BaseHttpService,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
