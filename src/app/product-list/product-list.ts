import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [
    { name: 'Notebook Gamer', price: 4500 },
    { name: 'Mouse Sem Fio', price: 80 },
    { name: 'Teclado Mecânico', price: 200 },
    { name: 'Monitor 24pol', price: 900 }
  ];
}
