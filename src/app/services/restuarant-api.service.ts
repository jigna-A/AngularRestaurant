import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestuarantComponent } from '../delete-restuarant/delete-restuarant.component';

@Injectable({
  providedIn: 'root'
})
export class RestuarantApiService {
  search=new BehaviorSubject("")

  constructor(private api:HttpClient) { }

  // to get all restuarant details Api call
  allRestuarantsList(){
    //api call
    return this.api.get('http://localhost:3000/restaurants')
  }

// get only user requested restuarant
viewrest(restId:any){
  return this.api.get('http://localhost:3000/restaurants/'+restId)
}
  
//add a new restuarant api - post

addRestuarant(restBody:any){
  return this.api.post('http://localhost:3000/restaurants',restBody)
}
//update a particular restuarant api - put
updateRestuarant(restId:any,restBody:any){
  return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)
}
//delete a particular restuarant api - delete

  deleteRestuarant(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/'+restId)
  }

}
