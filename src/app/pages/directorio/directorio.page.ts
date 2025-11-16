import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directorio',
  standalone: true,
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
    RouterLink,
  ],
})
export class DirectorioPage {
  constructor() {}
}
