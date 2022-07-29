import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddNewsComponent } from '../add-news/add-news.component';
import { LoadArticleService } from '../load-article.service';
import { LoadNewsService } from '../load-news.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  
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
    

    ngOnInit(): void {
      
    }
  }
  