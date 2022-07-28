import { getLocaleCurrencySymbol } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadNewsService {

  totalCount: number=-1;
  newsArr=new NewsArr();
  getNews()
  {
    this.http.get<NewsArr>(
    `https://webapi.autodoc.ru/api/news/${this.newsArr.news.length/10+1}/10`).subscribe(v=>{
     
      this.newsArr.news=this.newsArr.news.concat(v.news);
      console.log(this.newsArr);
    });
  }
  constructor(public http: HttpClient) { 
    this.getNews();
    console.log (this.newsArr);
  }
}


export interface News{
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  url: string;
  fullUrl: string;
  titleImageUrl: string;
  categoryType: string;
}

export class NewsArr
{
  news: News[]=[];
  totalCount: number=0
}