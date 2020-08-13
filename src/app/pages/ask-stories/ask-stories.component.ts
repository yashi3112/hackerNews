import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-ask-stories',
  templateUrl: './ask-stories.component.html',
  styleUrls: ['./ask-stories.component.scss']
})
export class AskStoriesComponent implements OnInit {

  result: number[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAskStories().subscribe(response => {
      this.result = response.splice(0, 10);
      console.log("form top news " + this.result);
    });
  }

}
