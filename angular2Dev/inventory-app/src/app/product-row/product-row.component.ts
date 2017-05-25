import { Component, HostBinding, Input } from '@angular/core';

import { Product } from './../product.model';

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {


  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
  constructor() { 

  }
}
