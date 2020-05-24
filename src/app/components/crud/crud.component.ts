import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  
  items:Item[];
  ngOnInit(): void {
    console.log('ngOninit rang')
    this.itemService.getItems().subscribe(items =>{
      console.log(items);
      this.items = items;
    });
      
    
  }

}
