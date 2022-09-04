import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [ShellComponent, SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule
  ]
})
export class ShellModule { }
