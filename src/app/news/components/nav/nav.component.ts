import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "../../services/news-api.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sources: Array<any> = [];
  articles: Array<any> = [];

  constructor(private newsApi: NewsApiService,
              private logoApi: LogoApiService) {
  }

  searchArticlesForSource(source: any) {
    console.log(`selected source is ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe((data: any) => {
        this.articles = data["articles"];
        this.articles.forEach((article: { source: { urlToLogo: any; url: any; }; }) => {
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
        console.log(this.articles);
      });
  }

  onSourceSelected(source: any) {
    console.log(source.name);
    this.searchArticlesForSource(source);
  }

  ngOnInit(): void {
    this.newsApi.getSource().subscribe((data: any) => {
      this.sources = data["sources"];
      this.sources.forEach((source: { urlToLogo: string; }) => {
        source.urlToLogo = this.logoApi.getUrlToLogo(source)
      });
      console.log(this.sources);
      this.searchArticlesForSource(this.sources[0]);
    });
  }


}
