import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Snippet } from '../../interfaces/snippet.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private uploadVideosListId = 'UUTh7-deUJBNv2tHRiMGcXxg';
  videos: Snippet[];
  constructor( private youtubeAppService: YoutubeService) { }

  ngOnInit() {
    this.youtubeAppService.getSelectPlaylistVideos(this.uploadVideosListId).subscribe( (res: Snippet[]) => {
      this.videos = res;
      console.log(this.videos.length);
      console.log(this.videos);
    });
  }

  playVideo(video: Snippet) {
    console.log(video.resourceId.videoId);
  }

}
