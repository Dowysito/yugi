import { Component } from '@angular/core';
import {CardsServiceService} from '../service/cards-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor (private cards:CardsServiceService) {

  }

}
