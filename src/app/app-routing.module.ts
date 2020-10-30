<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/account/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/account/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'membershipaccount',
    loadChildren: () => import('./Pages/Membership/membershipaccount/membershipaccount.module').then( m => m.MembershipaccountPageModule)
  },
];
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'ebookreader',
    loadChildren: () => import('./pages/ebookreader/ebookreader.module').then( m => m.EbookreaderPageModule)
  },
  {
    path: 'individualcategory',
    loadChildren: () => import('./Pages/MainCategory/individualcategory/individualcategory.module').then( m => m.IndividualcategoryPageModule)
  },
  {
    path: 'distributorship',
    loadChildren: () => import('./Pages/Others/distributorship/distributorship.module').then( m => m.DistributorshipPageModule)
  },  {
    path: 'about',
    loadChildren: () => import('./Pages/Others/about/about.module').then( m => m.AboutPageModule)
  }
>>>>>>> 4727efb406ca3bd8d0d26cce9c17f5d42bfb3da1

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
