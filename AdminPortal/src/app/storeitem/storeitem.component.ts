import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Item} from 'auth/models/Item';
import {ItemService} from '../item.service';
@Component({
  selector: 'app-storeitem',
  templateUrl: './storeitem.component.html',
  styleUrls: ['./storeitem.component.css']
})
export class StoreitemComponent implements OnInit {
  ItemRef = new FormGroup({
    _id: new FormControl(),
    iname: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    company: new FormControl()
  });
  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

  addItemDetails(): void
  {
    this.itemService.storeItemDetailsInDb(this.ItemRef.value)
  }
}
