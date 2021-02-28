import { ItemService, Item } from "../../services/item-service.service"
import { Component, OnInit, ViewChild, TemplateRef, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  columns: any[] = [];
  rows:any[] = [];
  constructor(private itemService: ItemService) { }
  ngOnInit(): void {
   

    this.itemService.GetItems().subscribe(res => {
      this.rows = res;
      console.log(this.rows);
    },error => {
      console.log(error);
    })
  }


}
