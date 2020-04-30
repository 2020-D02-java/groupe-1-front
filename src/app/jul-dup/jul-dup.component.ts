import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jul-dup',
  templateUrl: './jul-dup.component.html',
  styleUrls: ['./jul-dup.component.scss']
})
export class JulDupComponent implements OnInit {
  aff = false;
  listImage: string[] = ['https://i.ytimg.com/vi/ZUsywvbRuIg/maxresdefault.jpg', 'https://medias.pylones.com/6533-thickbox_default/chaussettes-duchesse.jpg']
  constructor() { }

  ngOnInit(): void {
  }
  afficher() {
    this.aff = true;
  }
  effacer() { this.aff = false; }
}
