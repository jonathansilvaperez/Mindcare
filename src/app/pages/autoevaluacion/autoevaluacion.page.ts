import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autoevaluacion',
  standalone: true,
  templateUrl: './autoevaluacion.page.html',
  styleUrls: ['./autoevaluacion.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    RouterLink,
  ],
})
export class AutoevaluacionPage {
  constructor() {}
}
