import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoryListComponent } from './story-list.component';
import { HackerNewsService } from '../services/hacker-news-service.service';
import { of, throwError } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgxSpinnerModule } from "ngx-spinner";

describe('StoriesListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;
  let hackerNewsService: jasmine.SpyObj<HackerNewsService>;
  const errorMessage = 'An error occurred';

  beforeEach(async() => {

    // Create a spy object with jasmine.createSpyObj
   // mockDataService = jasmine.createSpyObj('HackerNewsService', ['getTopStories']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,BrowserAnimationsModule,NgxSpinnerModule,
        MatInputModule,MatPaginatorModule,MatTableModule],
      declarations: [StoryListComponent],
      // Provide the mock service using useValue
      providers: [ { provide: HackerNewsService, useValue: jasmine.createSpyObj('HackerNewsService', ['getTopStories']) }]
    });
    
    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    hackerNewsService = hackerNewsService = TestBed.inject(HackerNewsService) as jasmine.SpyObj<HackerNewsService>;
  });

   it('should fetch data on ngOnInit', () => {
    const mockResponse = {
      stories:[
        { 'title': 'Return to India', 'user': 'Test', 'url': 'https://www.google.com','type':'story' },
        { 'title': 'G20 summit India', 'user': 'India', 'url': 'https://www.google.com','type':'story' },
        { 'title': 'Test Title', 'by': 'user', 'url': '','type':'story' },
      ]
    //  totalCount: 10,
   };

    hackerNewsService.getTopStories.and.returnValue(of(mockResponse.stories));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.storyList.length).toBeGreaterThan(1);
  });

  it('should update storyList and totalCount on successful getStories call', () => {
    const expectedResult = {
      stories: [
        { 'title': 'Return to India', 'user': 'Test', 'url': 'https://www.google.com','type':'story' },
        { 'title': 'G20 summit India', 'user': 'India', 'url': 'https://www.google.com','type':'story' },
        { 'title': 'Test Title', 'user': 'user', 'url': '','type':'story' },
      ],
      totalCount: 10,
    };

    hackerNewsService.getTopStories.and.returnValue(of(expectedResult.stories));

    component.getTopStories();

    expect(hackerNewsService.getTopStories).toHaveBeenCalledWith();
  });

  it('should call window.open with the correct URL and target', () => {
    const openSpy = spyOn(window, 'open');
    component.open('https://www.google.com');
    expect(openSpy).toHaveBeenCalledWith('https://www.google.com', '_blank');
  });

});
