import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://shanky141297.github.io/news-feed/feed/latest.json';

  getLastestbriefing(): Observable<unknown> {
    return this.http.get<unknown>(this.apiUrl);
  }
}
