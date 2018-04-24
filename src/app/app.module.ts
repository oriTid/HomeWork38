import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleListService } from './shared/services/Articles.Services';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesListComponent,
    ArticleInfoComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ArticleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
