import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Article, LoadArticleService } from '../load-article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [
    trigger("loaded", [
      state("void", style({'opacity': 0})),
      state("true", style({'opacity': 1})),
      transition("void=>*", animate('500ms',keyframes([
        style({opacity: 0}),
        style({opacity: 1})
      ])
      ))
    ])
  ]
})
export class ArticleComponent implements OnInit {


  loaded=false;
  url: string="";
  article!: Article;
  constructor(public router: Router,public loadArticle: LoadArticleService) {
    this.url=(this.router.getCurrentNavigation()!.extras.state!["url"])||'';

   }

  back()
  {
    this.router.navigate(['/'])
  }
  ngOnInit(): void {

    this.loadArticle.getArticle("https://webapi.autodoc.ru/api/news/item/"+this.url).subscribe(v=>{
      
      this.article = <Article>(v);
      this.loaded=true;
    })
    
  }

}
