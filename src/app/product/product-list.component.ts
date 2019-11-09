import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/app/product/product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string = 'default';
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(filter: string){
        this._listFilter = filter;
        this.filteredProducts = this._listFilter ? this.perfomFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];
    errorMessage: string;

      constructor(private _productService: ProductService){
      }

      onRatingClicked(message: string): void{
          this.pageTitle = 'Product List ' + message;
      }

      perfomFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      } 

      toggleImage(): void{
        this.showImage = !this.showImage;
      }

      ngOnInit(): void {
          console.log('InitCalled');
          this._productService.getProducts().subscribe(
            products => {
              this.products = products;
              this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
          );     
      }
  }
  