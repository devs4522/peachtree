import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { MerchantPipe } from './helpers/pipes/merchant.pipe';
import { OrderByPipe } from './helpers/pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransferComponent,
    TransferListComponent,
    MerchantPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
