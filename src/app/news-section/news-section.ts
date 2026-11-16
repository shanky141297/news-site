import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
export class NewsSection {
  @Input() newsBlock: any = [];
  categoryType = 'All';
  theme: 'morning' | 'evening' = 'morning';

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
