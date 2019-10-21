import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddDeviceModalPage } from './add-device-modal/add-device-modal.page';
import {HttpClientModule} from '@angular/common/http';
import { SharedComponentModule } from './shared-component/shared-component.module';
import { ActionsComponent } from './actions/actions.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { AddDeviceWithoutProfilePage } from './add-device-without-profile/add-device-without-profile.page';
import {DropdownModule} from 'primeng/primeng';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [AppComponent,ActionsComponent
],
  entryComponents: [
    ActionsComponent
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedComponentModule,
    SelectButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    AgGridModule
   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
