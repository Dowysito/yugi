import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CardsServiceService} from '../service/cards-service.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  cards: any[] = [];
  cardsloaded: any[] = [];
  id: string;



  constructor(private http: HttpClient, private service:CardsServiceService, private router: Router) {
    this.obtener();
  }


  async obtener() {
    this.cardsloaded = [];
    this.cards=this.service.allcards;
    for (let i = 0; i < 25; i++) {
      this.cardsloaded.push(this.service.allcards[i]);
    }
  }

  ngOnInit() {
    this.obtener();
  }

  async add(id: string){
    this.service.add.push(id);
    this.router.navigate(['/deck-builder']);
  }

  loadData(event) {
    setTimeout(() => {
      if ((this.cards.length - this.cardsloaded.length) < 25) {
        for (let i = 0; i < (this.cards.length - this.cardsloaded.length); i++) {
          this.cardsloaded.push(this.cards[this.cardsloaded.length]);
        }
      } else {
        for (let i = 0; i < 25; i++) {
          this.cardsloaded.push(this.cards[this.cardsloaded.length]);
        }
      }

      event.target.complete();

      // tslint:disable-next-line:triple-equals
      if (this.cardsloaded.length == this.cards.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async search(value: string) {
    this.cards = [];
    this.cardsloaded = [];
    if (value==""){
      this.obtener()
    }
    else {
      this.cards = this.service.search(value, "");
      if (this.cards.length < 25) {
        for (let i = 0; i < this.cards.length; i++) {
          this.cardsloaded.push(this.cards[i]);
        }
      } else {
        for (let i = 0; i < 25; i++) {
          this.cardsloaded.push(this.cards[i]);
        }
      }
    }
  }
}
