import { NgModule } from '@angular/core';
import { StarComponent } from 'src/app/shared/star.component';
import { ConvertToEspacesPipe } from 'src/app/shared/convert-to-spaces-pipe';
import { ProductDetailComponent } from 'src/app/product/product-detail.component';
import { ProductListComponent } from 'src/app/product/product-list.component';
import { ProductGuardService } from 'src/app/product/product-guard.service';
import { ProductService } from 'src/app/product/product.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToEspacesPipe
    ],
    imports: [
        RouterModule.forChild([
            { path: 'product', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
        ]),
        SharedModule
    ],
    providers: [ProductService, ProductGuardService]
})
export class ProductModule { }