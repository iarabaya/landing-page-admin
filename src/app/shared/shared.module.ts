import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';
import { ProtectedRoutingModule } from '../protected/protected-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProtectedRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
