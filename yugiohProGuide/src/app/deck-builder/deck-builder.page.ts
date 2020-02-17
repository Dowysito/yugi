import { Component, OnInit } from '@angular/core';
import {CardsServiceService} from '../service/cards-service.service';
import {AgregarPage} from '../agregar/agregar.page';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

declare function leer(): any;
declare function write(): any;
declare var main: any[];
declare var extra: any[];
declare var side: any[];

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.page.html',
  styleUrls: ['./deck-builder.page.scss']
})
export class DeckBuilderPage implements OnInit {
  maincards:any[] = [];
  extracards:any[] = [];
  sidecards:any[] = [];
  card: any[] = [];
  constructor(private service: CardsServiceService, private router: Router, public alertController: AlertController) {
  }

  ngOnInit() {

  }

    ionViewWillEnter() {
        if (this.service.add.length!=0){
            this.actualizar();
        }
    }

  async abrirDeck() {
    leer();
    let fuera=this;
    setTimeout(function() {
      fuera.conseguircards();
    }, 500)
  }

  async conseguircards(){
    if (main.length!=0){
      for (let i = 0; i < main.length; i++) {
          if (await this.service.searchbyid(main[i])!=undefined){
              this.maincards.push(this.service.searchbyid(main[i]));
          }
      }
      this.card.push(this.maincards[0]);
    }
    if (extra.length!=0){
      for (let i = 0; i < extra.length; i++) {
          if (await this.service.searchbyid(extra[i])!=undefined){
              this.extracards.push(this.service.searchbyid(extra[i]));
          }
      }
    }
    if (side.length!=0){
      for (let i = 0; i < side.length; i++) {
          if (await this.service.searchbyid(side[i])!=undefined){
              this.sidecards.push(this.service.searchbyid(side[i]));
          }
      }
    }
}

  showMain(i: number) {
    this.card = [];
    this.card.push(this.maincards[i]);
  }

  showExtra(i: number) {
    this.card = [];
    this.card.push(this.extracards[i]);
  }

  showSide(i: number) {
    this.card = [];
    this.card.push(this.sidecards[i]);
  }

  add() {
      this.router.navigate(['/agregar']);
    }

  async actualizar() {
        if (this.service.add[0]!=undefined){
            this.presentAlertConfirm();
        }
    }


    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Where?',
            message: 'Select Where you want to insert the card',
            buttons: [
                {
                    text: 'Main/Extra Deck',
                    handler: () => {
                        if (this.service.compare(this.service.add[0]).type == "Spell Card"||this.service.compare(this.service.add[0]).type == "Trap Card"){
                            this.maincards.push(this.service.compare(this.service.add[0]));
                            main.push(this.service.compare(this.service.add[0]).id.toString());
                        }
                        else if (this.service.compare(this.service.add[0]).type.indexOf("XYZ")==-1&&this.service.compare(this.service.add[0]).type.indexOf("Fusion")==-1&&
                                this.service.compare(this.service.add[0]).type.indexOf("Synchro")==-1&&this.service.compare(this.service.add[0]).type.indexOf("Link")==-1){
                            this.maincards.push(this.service.compare(this.service.add[0]));
                            main.push(this.service.compare(this.service.add[0]).id.toString());
                        }
                        else{
                            this.extracards.push(this.service.compare(this.service.add[0]));
                            extra.push(this.service.compare(this.service.add[0]).id.toString());
                        }
                        this.service.add = [];
                    }
                }, {
                    text: 'Side Deck',
                    handler: () => {
                        this.sidecards.push(this.service.compare(this.service.add[0]));
                        side.push(this.service.compare(this.service.add[0]).id.toString());
                        this.service.add = [];
                    }
                }
            ]
        });

        await alert.present();
    }

    deleteMain(id: any) {
        this.maincards.splice(this.maincards.findIndex(card => card.id == id),1);
        main.splice(this.maincards.findIndex(card => card.id == id),1);
        return false;
    }


    deleteExtra(id: any) {
        this.extracards.splice(this.extracards.findIndex(card => card.id == id),1);
        extra.splice(this.extracards.findIndex(card => card.id == id),1);
        return false;
    }


    deleteSide(id: any) {
          this.sidecards.splice(this.sidecards.findIndex(card => card.id == id),1);
          side.splice(this.sidecards.findIndex(card => card.id == id),1);
        return false;
    }

    initwrite() {
      write();
    }
}
