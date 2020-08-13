import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss']
})
export class NewStoriesComponent implements OnInit {

  result: number[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewStories().subscribe(response => {
      this.result = response.splice(0, 10);
      console.log("form top news " + this.result);
    });
  }

}
