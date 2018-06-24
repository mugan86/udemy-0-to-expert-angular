import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  @Input() videoId;
  constructor() { }

  ngOnInit() {
    console.log(this.videoId);
  }

}
