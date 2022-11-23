import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-viewrest',
  templateUrl: './viewrest.component.html',
  styleUrls: ['./viewrest.component.css']
})
export class ViewrestComponent implements OnInit {

  restId:any
  restBody:any

  constructor(private activatedRoute:ActivatedRoute,
    private restService:RestuarantApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']
      // console.log(this.restId );
      
    })
    //api call
    this.restService.viewrest(this.restId)
    .subscribe((result)=>{
      this.restBody = result
      console.log(this.restBody);
      
    })
  }

}
