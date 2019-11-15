import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/product/product-list.component';
import { ConvertToEspacesPipe } from 'src/app/shared/convert-to-spaces-pipe'
import { StarComponent } from 'src/app/shared/star.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { ProductGuardService } from 'src/app/product/product-guard.service';
import { ProductModule } from 'src/app/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [ProductGuardService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
