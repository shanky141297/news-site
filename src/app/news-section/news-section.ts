import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";

@Component({
  selector: 'app-news-section',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './news-section.html',
  styleUrl: './news-section.scss',
})
export class NewsSection{
  @Input() newsBlock: any = [];
  categoryType = 'All';
  theme: 'morning' | 'evening' = 'morning';
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(){
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    isDayTime ? this.theme = 'morning' : this.theme = 'evening' 
  }
  
  selectCategory(key: string) {
    this.categoryType = key;
  }
  
  filterStories(stories: any[] = []) {
    if (!Array.isArray(stories)) {
      return [];
    }
    
    if (this.categoryType === 'All') {
      return stories;
    }
    
    return stories.filter((story) => story.category === this.categoryType);
  }
  
  filterTheme(entries: any[] = []) {
    if (!Array.isArray(entries)) {
      return [];
    }
    
    return entries.filter((entry) => entry.edition === this.theme);
  }
}
