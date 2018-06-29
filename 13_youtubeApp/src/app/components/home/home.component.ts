import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Snippet } from '../../interfaces/snippet.interface';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private uploadVideosListId = 'UUTh7-deUJBNv2tHRiMGcXxg';
  videos: Snippet[] = [];
  selectVideo: Snippet;
  constructor( private youtubeAppService: YoutubeService) { }

  ngOnInit() {
    this.youtubeAppService.getSelectPlaylistVideos(this.uploadVideosListId).subscribe( (res: Snippet[]) => {
      this.videos = res;
      this.selectVideo = this.videos[0];
      console.log(this.videos.length);
      console.log(this.videos);
    });
  }

  playVideo(video: Snippet) {
    this.selectVideo = video;
    console.log(video.resourceId.videoId);
    $('#videoModal').modal();
  }

  closeModal() {
    $('#videoModal').on('hidden.bs.modal', function (e) {
      $('#videoModal iframe').attr('src', $('#videoModal iframe').attr('src'));
    });
  }

}
