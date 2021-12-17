import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HistoryComponent } from './pages/history/history.component';
import { ListsComponent } from './pages/lists/lists.component';
import { TravelsComponent } from './pages/travels/travels.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'register', component: RegisterComponent},
      {path:'travels', component: TravelsComponent},
      {path:'history', component: HistoryComponent},
      {path:'lists', component: ListsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
