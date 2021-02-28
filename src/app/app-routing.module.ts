import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent} from "./modules/item-list/item-list.component"
import { ItemDetailComponent } from "./modules/item-detail/item-detail.component"

const routes: Routes = [

  {
    path: '',
    children: [
 
      {
        path: 'item/list',
        component: ItemListComponent,
        data: { title: 'Item List' }
      },
      {
        path: 'item/create',
        component: ItemDetailComponent,
        data: { title: 'Item' }
      },
      {
        path: 'item/edit/:id',
        component: ItemDetailComponent,
        data: { title: 'Item' }
      },
      {
        path: 'item/details/:id',
        component: ItemDetailComponent,
        data: { title: 'Item' }
      },
      {
        path: 'item/delete/:id',
        component: ItemDetailComponent,
        data: { title: 'Item' }
      },
      {
        path: 'item/deposit/:id',
        component: ItemDetailComponent,
        data: { title: 'Item' }
      },
      {
        path: 'item/withdraw/:id',
        component: ItemDetailComponent,
        data: { title: 'Item' }
      }

    ]
  }
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

	}
