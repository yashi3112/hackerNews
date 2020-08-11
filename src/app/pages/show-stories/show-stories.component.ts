import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-show-stories',
  templateUrl: './show-stories.component.html',
  styleUrls: ['./show-stories.component.scss']
})
export class ShowStoriesComponent implements OnInit {

  result: number[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getShowStories().subscribe(response => {
      this.result = response.splice(0, 10);
    });
  }

}
