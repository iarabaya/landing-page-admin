import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { HistoryComponent } from './pages/history/history.component';
import { ListsComponent } from './pages/lists/lists.component';
import { RegisterComponent } from './pages/register/register.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoryComponent,
    ListsComponent,
    RegisterComponent,
    TravelsComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
