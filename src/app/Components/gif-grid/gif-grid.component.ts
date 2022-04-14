import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetGifsService } from 'src/app/Services/get-gifs.service';

@Component({
  selector: 'app-gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrls: ['./gif-grid.component.css']
})
export class GifGridComponent implements OnInit {

  gifs: any = []

  constructor(private api: GetGifsService) { }

  ngOnInit (): void {
    // this.api.getTrendingGifs().subscribe( ( data: any ): void => {
    //   data.data.map( ( oneGif: any ) => {
    //     this.gifs.push( oneGif.images.fixed_height.url )
    //   } )
    // } )
  }

  receiveSearchData ( event: any ) {
    // console.log(event[0].images.fixed_height.url)
    this.gifs.splice(0, this.gifs.length)
    
    event.map( (data: any) => {
      this.gifs.push( data.images.fixed_height.url )
    })
  }

}
