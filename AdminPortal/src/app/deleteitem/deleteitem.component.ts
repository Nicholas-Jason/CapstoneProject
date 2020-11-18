import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-deleteitem',
  templateUrl: './deleteitem.component.html',
  styleUrls: ['./deleteitem.component.css']
})
export class DeleteitemComponent implements OnInit {
  result:string;
  constructor(public itemService:ItemService) { }
  
  ngOnInit(): void {
  }
  deleteItem(ItemId)
  {
    this.itemService.deleteItemById(ItemId).subscribe(data=>this.result=data.msg);
  }
}
