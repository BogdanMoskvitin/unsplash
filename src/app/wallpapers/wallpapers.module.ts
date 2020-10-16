import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WallpapersRoutingModule } from './wallpapers-routing.module';
import { WallpapersComponent } from './wallpapers.component';


@NgModule({
  declarations: [WallpapersComponent],
  imports: [
    CommonModule,
    WallpapersRoutingModule
  ]
})
export class WallpapersModule { }
