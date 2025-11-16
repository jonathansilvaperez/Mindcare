import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { AutoevaluacionPage } from './autoevaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: AutoevaluacionPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AutoevaluacionPage]
})
export class AutoevaluacionPageModule {}
