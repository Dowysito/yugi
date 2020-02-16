import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {CardsServiceService} from '../service/cards-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  card: any[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private service: CardsServiceService) {
    const fuera = this;
    // tslint:disable-next-line:only-arrow-functions
    activatedRoute.params.subscribe(function(params) {
      fuera.card=fuera.service.getCard(params.id);
    }
  );
}

  ngOnInit() {
  }

  monster() {
    if ((String(this.card[0].type)).includes('Monster')) {
      return true;
    }
  }
}
