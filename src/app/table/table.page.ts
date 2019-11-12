import { Component, OnInit } from '@angular/core';
import data from '../../assets/company.json'
@Component({
  selector: 'app-table',
  templateUrl: "table.page.html",
  styleUrls: ['./table.page.scss'],
})


export class TablePage {
  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
   rowData:any= [];
   rowSelection:any="multiple";

  constructor() { 

    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "Age",
        field: "age",
        width: 150,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Country",
        field: "country",
        width: 150
      },
      {
        headerName: "Year",
        field: "year",
        width: 150
      },
      {
        headerName: "Date",
        field: "date",
        filter:"agDateColumnFilter"
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 150,
        filter:false
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 150,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 150,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 150,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Total",
        field: "total",
        width: 150,
        filter: false
      }
    ];
    


    this.rowData=data;
  }

}



