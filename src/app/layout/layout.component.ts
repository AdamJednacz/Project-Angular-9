import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {IconsComponent} from "./icons/icons.component";
import {MissionComponent} from "./mission/mission.component";
import {OfferComponent} from "./offer/offer.component";
import {ContactComponent} from "./contact/contact.component";
import {InfoBarComponent} from "./info-bar/info-bar.component";
import {FooterComponent} from "./footer/footer.component";
import {EmailComponent} from "./email/email.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    IconsComponent,
    MissionComponent,
    OfferComponent,
    ContactComponent,
    InfoBarComponent,
    FooterComponent,
    EmailComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
