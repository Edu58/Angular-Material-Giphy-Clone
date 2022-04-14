import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { GetGifsService } from 'src/app/Services/get-gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchData: EventEmitter<any> = new EventEmitter()

  constructor (private api: GetGifsService) { }
  
  searchGif ( form: NgForm ) {
    this.api.searchGif( form.value.word ).subscribe( (data: any) => {
      this.searchData.emit(data.data)
    })
    
    form.reset()
  }

  ngOnInit(): void {
  }

}
