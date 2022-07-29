import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { News, NewsArr } from '../load-news.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(public snackbar: MatSnackBar,public storage: StorageService, public dialog: DialogRef) { }

  news: News={
    id: 0,
    title: "",
    fullUrl: "",
    description: "",
    publishedDate: "",
    url: "", 
    titleImageUrl: "",
    categoryType: ""
  };

  ngOnInit(): void {
    this.news.publishedDate=Date.now().toString();
  }


  
  addNews()
  {
    if (!(this.news.description&&this.news.title&&this.news.titleImageUrl))
    {
      this.snackbar.open('Обязательно укажите название, описание новости, а также загрузите фото', 'Закрыть', {duration: 3000});
      return;
    }
    try
    {
      if (this.news.title&&this.news.description&&this.news.titleImageUrl&&this.news.publishedDate)
    {
      this.storage.addNews(this.news);
      console.log(localStorage.getItem('news'));
    }
    this.dialog.close();
    }
    catch(e)
    {
      let msg=e+'';
      if (msg.includes('QuotaExceededError'))
      {
        this.news.titleImageUrl="";
         this.snackbar.open('Ошибка: размер изображения превышает 5мб', 'Закрыть', {duration: 3000})
      }
    }
    
  }
  addImage()
  {
    let inp=document.createElement('input')
    inp.type='file';
    inp.accept=".jpg,.jpeg,.png"
    inp.click();
    inp.onchange=()=>{
      let reader=new FileReader();
      reader.onload=()=>{
        this.news.titleImageUrl=reader.result?.toString()||'';
      }

      reader.readAsDataURL(inp.files![0]);
      
    }
  }

  imgError(e: ErrorEvent)
  {
    this.news.titleImageUrl="";
    this.snackbar.open("Ошибка в загрузке изображения, попробуйте другое", "Закрыть", {duration: 5000});
  }
}
