import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AddNewsComponent } from './add-news/add-news.component';
import { LoadNewsService } from './load-news.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsList';
  constructor
  (public router: Router, public newsService: LoadNewsService, public dialog: MatDialog, public storage: StorageService)
  {

  }
  onScroll()
  {
    console.log ('onscroll');
    this.newsService.getNews();
  }
  addNews()
  {
    this.dialog.open(AddNewsComponent, {
      width: 'fit-content',
      height: '80%'
    })
  }
  showArticle()
  {
    this.router.navigateByUrl('/')
  }
}
