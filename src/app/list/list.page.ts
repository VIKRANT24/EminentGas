import { Component, OnInit,ViewChild } from '@angular/core';
import data from '../../assets/company.json'
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  //@ViewChild(DatatableComponent) table: DatatableComponent;
  private companies = data;
  private temp = data
  tableStyle = 'bootstrap';//material bootstrap
  cars: any[];

    cols: any[];
    
  constructor() {
  //   this.cols = [
  //     { field: 'DEVEUI', header: 'DEVEUI' },
  //     {field: 'Status', header: 'Status' },
  //     { field: 'Comment', header: 'Comment' },
  //     { field: 'Groups', header: 'Groups' },
  //     { field: 'Apps', header: 'Apps' },
  //     { field: 'Last Seen', header: 'Last Seen' },
  //     { field: 'Bulk Action', header: 'Bulk Action' }
  // ];
  // this.cars=[
  //   { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
  //   { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
  //   { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
  //   { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
  //   { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
  //   { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'}

    
  // ]
  }

 switchStyle()
 {

 }

 getRowClass(row)
 {

 }

 async open(row)
 {
console.log(row)
 }

 updateFilter(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.gender.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.companies = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}

}
