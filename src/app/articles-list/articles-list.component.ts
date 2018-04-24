import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticleListService } from '../shared/services/Articles.Services';
import { ArticleInfo } from "../Shared/Model/Articles.model";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Output() selectedArticleOutput: EventEmitter<ArticleInfo> = new EventEmitter<ArticleInfo>();
  articles: ArticleInfo[];
  currentID:number;

  constructor(private myService: ArticleListService) {

    this.articles = this.myService.articleFulllist;
  }

  ngOnInit() {
  }

  public selectArticleFunc(j: number) {
    this.selectedArticleOutput.emit(this.articles[j]);
this.currentID = j;
  }

}


