import { Component, OnInit,ViewChild} from '@angular/core';
import data from '../../assets/device.json'
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ActionsComponent } from '../actions/actions.component';
import { PopoverController } from '@ionic/angular';
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
  selected = [];
  tableStyle = 'bootstrap';//material bootstrap
  cars: any[];
  showfilter:boolean=false;

    cols: any[];
    ColumnMode = ColumnMode;
    SelectionType = SelectionType;
    
  constructor(public popoverCtrl:PopoverController) {

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
