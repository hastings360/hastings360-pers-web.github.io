import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PhotoStr } from '../../photo-str.model';

@Component({
  selector: 'app-mini-pics',
  templateUrl: './mini-pics.component.html',
  styleUrls: ['./mini-pics.component.css']
})
export class MiniPicsComponent implements OnInit {

  @Input() photo: PhotoStr;
  
  public url: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/temp-icons/mini-' + this.photo.imageName);
  }

}
