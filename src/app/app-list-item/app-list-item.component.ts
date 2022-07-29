import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { News } from '../load-news.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css'],
  host: {
    "(click)": "showArticle()"
  }
})
export class AppListItemComponent implements OnInit {

  @Input('news') news!: News;
  

  constructor(public storage: StorageService,public snackbar: MatSnackBar,  public router: Router) { }

  remove()
  {
    this.storage.news=this.storage.news.filter(
      v=>{
        return this.news!=v;
      });
      this.storage.setNews();
  }
  showArticle()
    {
      if (this.news.url)
      this.router.navigateByUrl
      ('/article', {state: {'url': this.news.url}});
      else this.snackbar.open('Эта новость еще не добавлена', 'Закрыть', {duration: 3000})
    }
  ngOnInit(): void {
  }

}
