import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url: string = environment.apiURL + "/items";
  constructor(private http: HttpClient) { }

  public GetItem(itemNo: number): Observable<Item> {
    return this.http.get<Item>(this.url+'/'+itemNo );
  }


  public Deposit(itemNo: number, amount: number): Observable<Item> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    let params = new HttpParams().set("amount", amount + "");

    return this.http.put<Item>(this.url + "/deposit/" + itemNo, null, { params: params });
  }


  public Withdraw(itemNo: number, amount: number): Observable<Item> {
    let headers = new HttpHeaders();
    let params = new HttpParams().set("amount", amount + "");

    return this.http.put<Item>(this.url + "/withdraw/" + itemNo, null, { params: params});
  }

  public AddItem(item: Item): Observable<Item> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post<Item>(this.url, JSON.stringify(item), { headers: headers, });
  }

  public GetItems(): Observable<Array<Item>> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<Array<Item>>(this.url , { headers: headers });
  }
  public DeleteItem(itemNo: number) {
    return this.http.delete(this.url+"/"+itemNo);
  }


  public Update(itemNo: number, item:Item): Observable<Item> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<Item>(this.url + "/" + itemNo, JSON.stringify(item), { headers: headers } );
  }


}

export interface Item {
  itemNo: number;
  name: string;
  amount: number;
  inventoryCode:string;
}
