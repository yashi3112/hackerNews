import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { forkJoin } from 'rxjs';
import { Story } from '.././models/story';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() stories: number[];
  newsList = [];
  colorCode = {
    story: '#6f42c1',
    comment: '#e83e8c',
    jobs: '#007bff'
  };
  constructor(private newsService: NewsService) { }


  ngOnInit(): void {

    const storyObs = this.stories.map(story => this.newsService.getItemDetail(story));

    forkJoin(storyObs).subscribe((response: Story[]) => {
      response.forEach(story => {
        story.color = this.colorCode[story.type] || this.colorCode.story;
      });
      console.log(response);
      this.newsList = response;
    });
  }

}
