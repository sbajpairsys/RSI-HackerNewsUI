import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story} from '../models/story.interface';
import { apiConfig} from '../config'

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private getStoryListUrl = apiConfig.apiBaseUrl + 'story/getTopStories';

  constructor(private _http: HttpClient) { }

// Method to get top hacker news stories //
getTopStories(): Observable<any[]> {
  return this._http.get<Story[]>(this.getStoryListUrl);
}
}
