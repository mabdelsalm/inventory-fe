import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, Item } from "../../services/item-service.service"
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  model: Item = <Item>{};
  actionType: string = "";
  id:any;
  amount:number=0;
  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) {
    this.actionType = route.snapshot.url[1].toString();

    if (route.snapshot.paramMap != null && route.snapshot.paramMap.get("id") != null) {
      this.id = route.snapshot.paramMap.get("id");
    }
    if (this.id != null && this.id > 0) {
      this.getItem(this.id);
    } else {
      this.model.itemNo = -1;
    }
  }

  ngOnInit(): void {

  }

  save() {
    if (this.model.itemNo > 0) {
      this.itemService.Update(this.model.itemNo, this.model).subscribe(res => {
        Swal.fire('Successfully updated item.');
        this.router.navigate(["/item/list"]);
      }, error => {
      })
    } else {
      this.itemService.AddItem(this.model).subscribe(res => {
        Swal.fire('Successfully created item.');
        this.router.navigate(["/item/list"]);
      }, error => {
      })
    }
 
  }

  delete() {
    Swal.fire({
      title: 'Delete Item',
      text: 'Are you sure you want to delete this item ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result: any) => {
      if (result.value) {
        this.itemService.DeleteItem(this.model.itemNo).subscribe(res => {
          Swal.fire('Successfully deleted item.');
          this.router.navigate(["/item/list"]);
        });
      }
    })
  }
  getItem(id:number) {
    this.itemService.GetItem(id).subscribe(res => {
      this.model = res;
    }, error => {
    })
  }

  withdraw() {
    this.itemService.Withdraw(this.model.itemNo, this.amount).subscribe(res => {
      Swal.fire('Successfully withdrawn');
      this.router.navigate(["/item/list"]);
    }, error => {
    })
  }
  deposit() {
    this.itemService.Deposit(this.model.itemNo, this.amount).subscribe(res => {
      Swal.fire('Successfully deposited');
      this.router.navigate(["/item/list"]);
    }, error => {
    })
  }
}
