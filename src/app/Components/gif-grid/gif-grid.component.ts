import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetGifsService } from 'src/app/Services/get-gifs.service';

@Component({
  selector: 'app-gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrls: ['./gif-grid.component.css']
})
export class GifGridComponent implements OnInit {

  gifs: any= []

  constructor(private api: GetGifsService) { }

  ngOnInit (): void {
    
  }

  getGifs () {
    this.api.getTrendingGifs().subscribe( ( data: any ): void => {
      data.data.map((oneGif: any) => this.gifs.push(oneGif.images.fixed_height.url))
    } )
    console.log(this.gifs)
  }

}
