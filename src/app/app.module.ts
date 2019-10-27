import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/product/product-list.component';
import { ConvertToEspacesPipe } from 'src/app/shared/convert-to-spaces-pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToEspacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
