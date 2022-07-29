import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadArticleService {

  constructor(private http: HttpClient) { }


  getArticle(url: string)
  {
    return  this.http.get(url);
  }
}


export interface Article
{
  id: number;
  title: string;
  description: string;
  text: string;
  publishedDate: string;
  url: string;
  fullUrl: string;
  titleImageUrl: string;
  categoryType: string;
}