
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  { path: 'add-device-modal', loadChildren: './add-device-modal/add-device-modal.module#AddDeviceModalPageModule' },
  { path: 'super-admin', loadChildren: './super-admin/super-admin.module#SuperAdminPageModule' },
  { path: 'menu-page', loadChildren: './menu-page/menu-page.module#MenuPagePageModule' },
  { path: 'add-admin', loadChildren: './add-admin/add-admin.module#AddAdminPageModule' },
  { path: 'admin-list', loadChildren: './admin-list/admin-list.module#AdminListPageModule' },
  { path: 'add-device-without-profile', loadChildren: './add-device-without-profile/add-device-without-profile.module#AddDeviceWithoutProfilePageModule' }
];

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
//   },
//   {
//     path: 'list',
//     loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
//   },
//   { path: 'add-device-modal', loadChildren: './add-device-modal/add-device-modal.module#AddDeviceModalPageModule' }

// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
