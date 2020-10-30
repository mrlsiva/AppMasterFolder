import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';
const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'ebookreader',
        loadChildren: () => import('../ebookreader/ebookreader.module').then(m => m.EbookreaderPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
<<<<<<< HEAD
      {
        path: '',
        redirectTo: '/tab/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/tab/home',
    pathMatch: 'full'
  }
=======
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
>>>>>>> 4727efb406ca3bd8d0d26cce9c17f5d42bfb3da1
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
