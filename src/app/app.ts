import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsFeedService } from './news-feed';
import { CommonModule, JsonPipe } from '@angular/common';
import { NewsSection } from './news-section/news-section';

@Component({
  selector: 'app-root',
  imports: [JsonPipe, CommonModule, NewsSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  constructor(
    private newsFeedService: NewsFeedService,
    private cdr: ChangeDetectorRef,
  ) {}
  
  news: any = [];
  
  ngOnInit() {
    this.getBriefing() 
    
  }
  
  
  getBriefing(){
    this.newsFeedService.getLastestbriefing().subscribe({
      next: (response) => {
        this.news = response;
        console.log(new Date());
        console.log('this.news', this.news);
        this.cdr.markForCheck();
      },
    });
  }
}
