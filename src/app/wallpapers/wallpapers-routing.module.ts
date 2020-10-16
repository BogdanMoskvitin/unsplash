import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallpapersComponent } from './wallpapers.component';

const routes: Routes = [{ path: '', component: WallpapersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallpapersRoutingModule { }
