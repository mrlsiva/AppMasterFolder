import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
        children:[
          {
            path:'',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'ebookreader',
        children:[
          {
            path:'',
            loadChildren: '../ebookreader/ebookreader.module#EbookreaderPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children:[
          {
            path:'',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'chat',
        children:[
          {
            path:'',
            loadChildren: '../chat/chat.module#ChatPageModule'
          }
        ]
      },
      // {
      //   path: '',
      //   redirectTo: '/tab/home',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tab/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
