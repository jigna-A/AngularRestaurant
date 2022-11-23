import { Component, OnInit } from '@angular/core';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {

  restuarantLists:any;
  // lDate:any
  filterString:any=""

  constructor(private resApi:RestuarantApiService) { }

  ngOnInit(): void {
    //asynchronous
    this.resApi.allRestuarantsList()
    .subscribe((result)=>{
      console.log(result);
      this.restuarantLists = result
      
    })
    // to get search term from service
    // this.lDate = new Date

    this.resApi.search.subscribe((data)=>{
      this.filterString=data
      console.log(this.filterString);
      
    })

  }

}
