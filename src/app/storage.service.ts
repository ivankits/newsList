import { Injectable } from '@angular/core';
import { LoadNewsService, News } from './load-news.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  key: string='news';
  public news!: News[];
  constructor(
  public loadNews: LoadNewsService    
  ) {
    this.getNews();
   }

   getNews()
   {
    this.news=JSON.parse(localStorage.getItem(this.key)||'[]');
   }

   setNews()
   {
    localStorage.setItem(this.key, JSON.stringify(this.news));
   }
   addNews(n: News)
   {
      this.news.unshift(n);
      this.loadNews.newsArr.news.unshift(n);
      this.setNews();
   }
}
