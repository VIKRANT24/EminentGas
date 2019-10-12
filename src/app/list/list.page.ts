import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  cars: any[];

    cols: any[];
  constructor() {
    this.cols = [
      { field: 'DEVEUI', header: 'DEVEUI' },
      {field: 'Status', header: 'Status' },
      { field: 'Comment', header: 'Comment' },
      { field: 'Groups', header: 'Groups' },
      { field: 'Apps', header: 'Apps' },
      { field: 'Last Seen', header: 'Last Seen' },
      { field: 'Bulk Action', header: 'Bulk Action' }
  ];
  this.cars=[
    { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
    { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
    { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
    { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
    { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'},
    { DEVEUI: 'vin', Status: 'Vin', Comment:'fdgdg', Groups:'dgdg',Apps:'rtert',LastSeen:'rtgdrtt',BulkAction:'grtdgd'}

    
  ]
  }

  ngOnInit() {
  }

}
