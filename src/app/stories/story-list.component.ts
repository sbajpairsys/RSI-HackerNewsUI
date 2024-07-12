import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Story } from '../models/story.interface';
import { HttpClient } from '@angular/common/http';
import { HackerNewsService } from '../services/hacker-news-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, } from '@angular/material/table';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  storyList: Story[]=[];

  public displayedColumns: string[] = ['title', 'url'];
  public dataSource = new MatTableDataSource<Story>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private storyService: HackerNewsService,private httpClient: HttpClient,
    private spinner: NgxSpinnerService) {}

  showSpinner() {
   this.spinner.show();
    
    setTimeout(() => {
     this.spinner.hide();
    }, 100000);
  }

  ngOnInit(): void {
    this.getTopStories();
  }
  
  getTopStories() {
    this.showSpinner();
    this.storyService.getTopStories().subscribe(
        (result:any) => {
          this.storyList = result;
          this.dataSource = new MatTableDataSource<Story>(this.storyList);
          this.dataSource.paginator = this.paginator;
          this.spinner.hide();
        },
        (error) => {
            /* Exception handling functionality */

        }
      );
  }

  // Get data based on search filter.
 public applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  open(url: string) {
    window.open(url, "_blank");
  }
}
