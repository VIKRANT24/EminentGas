import { Component, OnInit,ViewChild} from '@angular/core';
import data from '../../assets/device.json'
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ActionsComponent } from '../actions/actions.component';
import { PopoverController } from '@ionic/angular';

declare var firebase;

var config={
  apiKey: 'AIzaSyCxk372bpVybPuj_5xKrB9Xy_vTD93REd4',
  authDomaim : 'eminent-gas-tech.firebase',
  databaseURL : 'https://eminent-gas-tech.firebaseio.com'
};

firebase.initializeApp(config)

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  //@ViewChild(DatatableComponent) table: DatatableComponent;
  public companies = data;
  private temp = data
  selected = [];
  tableStyle = 'bootstrap';//material bootstrap
  cars: any[];
  showfilter:boolean=false;

    cols: any[];
    colors: any[];
    ColumnMode = ColumnMode;
    SelectionType = SelectionType;
    
  constructor(public popoverCtrl:PopoverController) {

firebase.database().ref('/eminent-gas-tech').once('value').then(function (data) {

alert(JSON.stringify(data.val()))

})
    
    this.cols = [
      { field: 'deveui', header: 'Deveui' },
      { field: 'registration_status', header: 'Status' },
      { field: 'comment', header: 'Comments' },
      { field: 'groups', header: 'Groups' },
      { field: 'applications', header: 'Apps' },
      { field: 'applications', header: 'Last Seen' },
      { field: 'applications', header: 'Bulk Action' },
    ]
    
      this.colors = [
        { label: 'White', value: 'White' },
        { label: 'Green', value: 'Green' },
        { label: 'Silver', value: 'Silver' },
        { label: 'Black', value: 'Black' },
        { label: 'Red', value: 'Red' },
        { label: 'Maroon', value: 'Maroon' },
        { label: 'Brown', value: 'Brown' },
        { label: 'Orange', value: 'Orange' },
        { label: 'Blue', value: 'Blue' }
    ]
     
  
  }

  search()
  {
    if(this.showfilter == true)
    this.showfilter=false
    else
    this.showfilter =true

  }

  async action(ev)
  {
    const popover = await this.popoverCtrl.create({
      component: ActionsComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();


    
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
    return d.deveui.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.companies = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}


onSelect({ selected }) {
  console.log('Select Event', selected, this.selected);

  this.selected.splice(0, this.selected.length);
  this.selected.push(...selected);
}

onActivate(event) {
  console.log('Activate Event', event);
}

add() {
  this.selected.push(this.companies[1], this.companies[3]);
}

update() {
  this.selected = [this.companies[1], this.companies[3]];
}

remove() {
  this.selected = [];
}



}
