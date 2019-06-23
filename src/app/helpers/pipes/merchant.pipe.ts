import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'merchant'
})
export class MerchantPipe implements PipeTransform {

  transform(transactions: any, searchText?: any): any {
    if(searchText == null) return transactions;

    return transactions.filter(function(transction){
      return transction.merchant.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
