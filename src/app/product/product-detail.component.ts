import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product/product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Produtc Detail';
  product: IProduct;
  
  constructor(private _route:  ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    //the + sign convert string to a numeric id
    let id = +this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle += ' ' + id;
    console.log(this.pageTitle);
    this.product = {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2019",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    }
  }

  onBack(): void {
    this._router.navigate(['/product']);
  }
}
