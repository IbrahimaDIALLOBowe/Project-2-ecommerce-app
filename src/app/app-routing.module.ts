import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from "./component/register/register.component";
import{LoginComponent} from "./component/login/login.component";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorComponent } from "./component/error/error.component";

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}