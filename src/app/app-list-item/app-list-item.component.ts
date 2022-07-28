import { Component, Input, OnInit } from '@angular/core';
import { News } from '../load-news.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css']
})
export class AppListItemComponent implements OnInit {

  @Input('news') news!: News;
  

  constructor() { }

  ngOnInit(): void {
  }

}
