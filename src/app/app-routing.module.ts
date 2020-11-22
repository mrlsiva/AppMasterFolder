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
  
  {
    path: 'individualcategory',
    loadChildren: () => import('./Pages/MainCategory/individualcategory/individualcategory.module').then( m => m.IndividualcategoryPageModule)
  },
  {
    path: 'distributorship',
    loadChildren: () => import('./Pages/Others/distributorship/distributorship.module').then( m => m.DistributorshipPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./Pages/Others/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'viewmorebooks',
    loadChildren: () => import('./Pages/Maincategory/viewmorebooks/viewmorebooks.module').then( m => m.ViewmorebooksPageModule)
  },  {
    path: 'readselectedbook',
    loadChildren: () => import('./Pages/readselectedbook/readselectedbook.module').then( m => m.ReadselectedbookPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Pages/Others/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./Pages/Others/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./Pages/Others/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./Pages/Others/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./Pages/Others/catalogue/catalogue.module').then( m => m.CataloguePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
