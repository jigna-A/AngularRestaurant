import { Component, OnInit } from '@angular/core';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService:RestuarantApiService) { }

  ngOnInit(): void {
  }
  search(event:any){
    let searchItem=event.target.value
    // console.log(searchItem);
    
      this.apiService.search.next(searchItem)
  }

}
