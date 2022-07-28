import { Component } from '@angular/core';
import { LoadNewsService } from './load-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsList';
  constructor(public newsService: LoadNewsService)
  {

  }
  onScroll()
  {
    console.log ('onscroll');
    this.newsService.getNews();
  }
}
