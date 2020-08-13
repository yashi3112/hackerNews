import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-job-stories',
  templateUrl: './job-stories.component.html',
  styleUrls: ['./job-stories.component.scss']
})
export class JobStoriesComponent implements OnInit {

  result: number[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getJobStories().subscribe(response => {
      this.result = response.splice(0, 10);
      console.log("form top news " + this.result);
    });
  }

}
