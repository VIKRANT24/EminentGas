import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-page',
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
  { path: 'add-device', loadChildren: './add-device/add-device.module#AddDevicePageModule' },

  { path: 'add-device-woprofile', loadChildren: './add-device-woprofile/add-device-woprofile.module#AddDeviceWOProfilePageModule' },
  { path: 'device-activity-superadmin', loadChildren: './device-activity-superadmin/device-activity-superadmin.module#DeviceActivitySuperadminPageModule' },
  { path: 'list-superadmin', loadChildren: './list-superadmin/list-superadmin.module#ListSuperadminPageModule' },
  { path: 'superdeviceactivity', loadChildren: './superdeviceactivity/superdeviceactivity.module#SuperdeviceactivityPageModule' },  { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofilePageModule' },
  { path: 'addarm', loadChildren: './addarm/addarm.module#AddarmPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
