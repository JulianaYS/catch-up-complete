import {SourceEntity} from "./source.entity";

export class ArticleEntity {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: SourceEntity;
  constructor() {
    this.title = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.source = new SourceEntity();
  }
}
