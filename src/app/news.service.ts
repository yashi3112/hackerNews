import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from './models/story';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpService: HttpClient) { }

  getNewStories(): Observable<number[]> {
    return this.httpService.get<number[]>('https://hacker-news.firebaseio.com/v0/newstories.json');
  }
  getTopStories(): Observable<number[]> {
    return this.httpService.get<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json');
  }
  getAskStories(): Observable<number[]> {
    return this.httpService.get<number[]>('https://hacker-news.firebaseio.com/v0/askstories.json');
  }
  getJobStories(): Observable<number[]> {
    return this.httpService.get<number[]>('https://hacker-news.firebaseio.com/v0/jobstories.json');
  }
  getShowStories(): Observable<number[]> {
    return this.httpService.get<number[]>('https://hacker-news.firebaseio.com/v0/showstories.json');
  }
  getBestStories(): Observable<number[]> {
    return this.httpService.get<number[]>('https://hacker-news.firebaseio.com/v0/beststories.json');
  }
  getItemDetail(id: number): Observable<Story | Comment> {
    return this.httpService.get<Story | Comment>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }

}
