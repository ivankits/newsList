import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListItemComponent } from './app-list-item/app-list-item.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatInputModule} from "@angular/material/input"
import { AddNewsComponent } from './add-news/add-news.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SanitizerPipe } from './sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppListItemComponent,
    AddNewsComponent,
    ArticleComponent,
    NewsListComponent,
    SanitizerPipe
  ],
  imports: [
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    InfiniteScrollModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
