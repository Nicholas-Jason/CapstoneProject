import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from 'auth/models/Item'
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public httpClient:HttpClient) { }

  getAllItemDetails():Observable<Item[]> {
    return this.httpClient.get<Item[]>("http://localhost:/api/items/5000/getItems");
  }

  storeItemDetailsInDb(ItemRef): Observable<any> {

    return this.httpClient.post("http://localhost:5000/api/items/storeItem",ItemRef);
   
     }

  deleteItemById(ItemId):Observable<any>{
      return this.httpClient.delete("http://localhost:5000/api/items/deleteItemById/"+ItemId);
      }

  updateItemDetailsFromDb(ItemRef):Observable<any> {
        return this.httpClient.put("http://localhost:5000/api/items/updateItem",ItemRef);
      }

      find(ItemId): Observable<Item>
      {
        return this.httpClient.get<Item>("http//localhost:5000/api/items/getItemById/:id"+ItemId)
      }
}
