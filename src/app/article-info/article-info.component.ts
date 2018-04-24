import { Component, OnInit, Input } from '@angular/core';
import { ArticleInfo } from '../Shared/Model/Articles.model';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {

  @Input() finalResults: ArticleInfo;

  constructor() { }

  ngOnInit() {
  }

}
