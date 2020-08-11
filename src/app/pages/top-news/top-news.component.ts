import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {

  result: number[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopStories().subscribe(response => {
      this.result = response.splice(0, 10);
      console.log("form top news " + this.result);
    });
  }

}
