import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products: any[];

  constructor() {

    this.products = [];
  }
  add(product: any) {

    this.products.push(product);
  }

  remove(index: number) {

    if (index > -1) {
      this.products.splice(index, 1);
    }

  }

  clear() {

    this.products = [];

  }

  get() {

    return this.products;

  }

}