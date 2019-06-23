import { Component, OnInit } from '@angular/core';
import { Transction } from '../transction.model';
import { TransctionService } from '../transction.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent implements OnInit {
  transctions: Transction[];
  transctionFilter: FormGroup;
  direction: number;
  isDesc= false;
  column= 'transactionDate';
  

  constructor(private tsService: TransctionService) { }

  ngOnInit() {
    this.tsService.transctionChanged.subscribe(
      (transctions: Transction[])=>{
        this.transctions= transctions;
        this.onSort(this.column, true);
      }
    )
    this.transctions=  this.tsService.getTransctions(); 
    this.initTransctionFilterForm();
  }

  initTransctionFilterForm(){
    this.transctionFilter= new FormGroup({
      searchText: new FormControl()
    })
  }


  // Change sort function to this: 
  onSort(property, newItemAdded){
    console.log("Inside sort", this.column);
    if(!newItemAdded){
      this.isDesc = !this.isDesc; //change the direction  
    }
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}
