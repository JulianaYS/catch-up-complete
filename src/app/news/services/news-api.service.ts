import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey : string = '6d2b52af5b624fd4a2d44d45bf5e3ddc';
  baseUrl :string = 'https://newsapi.org/v2';
  constructor(private http: HttpClient) { }

  getSource(){
    return this.http.get(`${this.baseUrl}/source?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }

}
