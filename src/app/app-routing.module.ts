import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  // { 
  //   path: 'add-device-modal',
  //  loadChildren: () => import('./add-device-modal/add-device-modal.module').then(m => m.AddDeviceModalPageModule)  
  // }, 
  { path: 'add-device-modal', loadChildren: './add-device-modal/add-device-modal.module#AddDeviceModalPageModule' },
  { path: 'super-admin', loadChildren: './super-admin/super-admin.module#SuperAdminPageModule' },
  { path: 'menu-page', loadChildren: './menu-page/menu-page.module#MenuPagePageModule' },
  { path: 'add-admin', loadChildren: './add-admin/add-admin.module#AddAdminPageModule' },
  { path: 'admin-list', loadChildren: './admin-list/admin-list.module#AdminListPageModule' },
  { path: 'edit-admin', loadChildren: './edit-admin/edit-admin.module#EditAdminPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'table', loadChildren: './table/table.module#TablePageModule' },
  { path: 'add-device-without-profile', loadChildren: './add-device-without-profile/add-device-without-profile.module#AddDeviceWithoutProfilePageModule' },
  { path: 'deviceactivity', loadChildren: './deviceactivity/deviceactivity.module#DeviceactivityPageModule' },
  { path: 'selectdevicemodal', loadChildren: './selectdevicemodal/selectdevicemodal.module#SelectdevicemodalPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
