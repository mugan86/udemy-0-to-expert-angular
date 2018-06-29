import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Snippet } from '../../interfaces/snippet.interface';
import { ANARTZ_MUGIKA_CHANNEL_UPLOADS, ANARTZ_MUGIKA_CHANNEL_ID } from '../../app.constant';
import { ApiYoutube } from '../../interfaces/api.interface';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private uploadVideosListId = ANARTZ_MUGIKA_CHANNEL_UPLOADS;
  private channelId = ANARTZ_MUGIKA_CHANNEL_ID;
  videos: Snippet[] = [];
  channelInfo: Snippet;
  selectVideo: Snippet;
  constructor( public youtubeAppService: YoutubeService) { }

  ngOnInit() {
    this.youtubeAppService.getUserChannelInfo(this.channelId).subscribe((res: Snippet) => {
      this.channelInfo = res;
      this.loadMore();
    });
  }

  loadMore(addItems: boolean = false) {
    this.youtubeAppService.getSelectPlaylistVideos(this.uploadVideosListId).subscribe((res: Snippet[]) => {
      if (!addItems) {
        this.videos = res;
      } else {
        this.videos.push.apply(this.videos, res);
      }
      this.selectVideo = this.videos[0];
    });
  }

  playVideo(video: Snippet) {
    this.selectVideo = video;
    $('#videoModal').modal();
  }

  closeModal() {
    $('#videoModal').modal('hide');
    $('#videoModal').on('hidden.bs.modal', function (e) {
      $('#videoModal iframe').attr('src', $('#videoModal iframe').attr('src'));
    });
  }

}
