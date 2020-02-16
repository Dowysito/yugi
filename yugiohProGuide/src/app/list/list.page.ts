import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {CardsServiceService} from '../service/cards-service.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  cards: any[] = [];
  cardsloaded: any[] = [];
  id: string;

  arch = '';



    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, private service:CardsServiceService) {
      const fuera = this;
      // tslint:disable-next-line:only-arrow-functions
      activatedRoute.params.subscribe(function(params) {
          if (params.id === '0') {
              fuera.obtener();
          } else if ((params.id as string).substr(0, 5) === 'Arch:') {
              fuera.arch = (params.id as string).substr(5, (params.id as string).length);
              fuera.obtenerConArquetipo();
          }
          }
      );
    }

    ionViewWillLeave() {
    this.cards = [];
}



  async obtener() {
      this.cardsloaded = [];
      this.cards=this.service.allcards;
      for (let i = 0; i < 25; i++) {
            this.cardsloaded.push(this.service.allcards[i]);
      }
  }

    async obtenerConArquetipo() {
        this.cards = this.service.cardsbyarchetype(this.arch);
        this.cardsloaded=this.cards;
    }

  ngOnInit() {

  }

    ir(name: any) {
        this.router.navigate(['/card', name]);
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
        // // tslint:disable-next-line:triple-equals
        // if (value != '') {
        //     this.router.navigate(['/list', 'Sear:' + value]);
        // }
        this.cards = [];
        this.cardsloaded = [];
        if (value==""&&this.arch==""){
            this.obtener()
        }
        else if (value==""&&this.arch!=""){
            this.cards = this.service.cardsbyarchetype(this.arch);
            this.cardsloaded=this.cards;
        }
        else {
            this.cards = this.service.search(value, this.arch);
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
