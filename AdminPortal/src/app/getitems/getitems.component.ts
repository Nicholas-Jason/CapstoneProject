import { Component, OnInit } from '@angular/core';
import {Item} from 'auth/models/Item';
import {ItemService} from '../item.service';
@Component({
  selector: 'app-getitems',
  templateUrl: './getitems.component.html',
  styleUrls: ['./getitems.component.css']
})
export class GetitemsComponent implements OnInit {
  items: Array<Item>;
  flag: boolean;
  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

  loadItemInfo()
  {
    this.flag = true;
    this.itemService.getAllItemDetails().subscribe(data=>this.items=data)
  }
}
