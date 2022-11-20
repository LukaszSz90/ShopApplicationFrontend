import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>("/api/products");

    // return [
    //   {
    //     name: "Product 1",
    //     category: "Kategoria 1",
    //     description: "Opis productu 1",
    //     price: 11.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Product 2",
    //     category: "Kategoria 2",
    //     description: "Opis productu 2",
    //     price: 12.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Product 3",
    //     category: "Kategoria 3",
    //     description: "Opis productu 3",
    //     price: 13.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Product 4",
    //     category: "Kategoria 4",
    //     description: "Opis productu 4",
    //     price: 14.99,
    //     currency: "PLN"
    //   },
    //   {
    //     name: "Product 5",
    //     category: "Kategoria 5",
    //     description: "Opis productu 5",
    //     price: 15.99,
    //     currency: "PLN"
    //   }
    // ];
  }
}