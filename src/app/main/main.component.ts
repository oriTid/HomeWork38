import { Component, OnInit } from '@angular/core';
import { ArticleInfo } from '../Shared/Model/Articles.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedArticle:ArticleInfo;

  public passResults(x:ArticleInfo){

    this.selectedArticle=x;
  }
  constructor() { }

  ngOnInit() {
  }

}
