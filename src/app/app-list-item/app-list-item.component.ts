import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
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
  },
  animations: [
    trigger('fade', [
      transition('void=>*', [style ({opacity: 0}), animate('200ms', style({opacity: 0.33})), animate('200ms', style({opacity: 0.66})), animate('200ms', style({opacity: 1}))])
    ])
  ]
})
export class AppListItemComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {

  }
  loaded: boolean=false;
  ready()
  {
    console.log ('ready');
    this.loaded=true;
  }
  @Input('news') news!: News;
  

  constructor(public ref: ElementRef,public storage: StorageService,public snackbar: MatSnackBar,  public router: Router) { }

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
