import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonSegment,
  IonSegmentButton,
  IonNav,
  IonNavLink,
  IonButton
} from '@ionic/angular/standalone';
import { UpcomingRemindersComponent } from 'src/app/components/upcoming-reminders/upcoming-reminders.component';
import { PastRemindersComponent } from 'src/app/components/past-reminders/past-reminders.component';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonNav,
    IonNavLink,
    IonButton,
    UpcomingRemindersComponent,
    PastRemindersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RemindersPage {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  selectedSegment = "upcoming";

  slideTo(index: number) {
    this.swiper.nativeElement.swiper.slideTo(index);
  }

  slideChange() {
    this.selectedSegment = this.swiper.nativeElement.swiper.activeIndex == 0 ? "upcoming" : "past";
  }
}
