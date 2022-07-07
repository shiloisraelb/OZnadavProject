import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdCustomerdCustomerComponent } from './components/ad-customerd-customer/ad-customerd-customer.component';
import { GrooTableComponent } from './components/groo-table/groo-table.component';
import { SityTableComponent } from './components/sity-table/sity-table.component';
import { UpdateCustComponent } from './components/update-cust/update-cust.component';

const routes: Routes = [ {
  // Defines the routings and their names
  path:"groopTable",
  component:SityTableComponent
},
{
  // Defines the routings and their names
  path:"Add",
  component:AdCustomerdCustomerComponent
},
{
  // Defines the routings and their names
  path:"cityTable",
  component: GrooTableComponent
},
{
  // Defines the routings and their names
  path:"Update",
  component: UpdateCustComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
 
   
}
