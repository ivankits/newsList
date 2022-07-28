import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListItemComponent } from './app-list-item/app-list-item.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    AppListItemComponent
  ],
  imports: [
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
