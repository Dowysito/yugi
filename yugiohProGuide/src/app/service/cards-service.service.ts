import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {
  url: string;
  add: any[] = [];
  allcards: any[] = [];

  constructor(private http:HttpClient) {
    this.initialstate()
  }

  initialstate(){
    this.allcards= [];
      this.http.get(`https://db.ygoprodeck.com/api/v6/cardinfo.php`).subscribe(params => {
        for (let i = 0; i < (params as Array<any>).length; i++) {
      this.allcards.push(params[i]);
      }
    });
}

  archetypes():any[] {
    let archetypes: any[] = [];
    this.http.get(`https://db.ygoprodeck.com/api/v6/archetypes.php`).subscribe(params => {
      for (let i = 0; i < (params as Array<any>).length; i++) {
        archetypes.push(params[i]);
      }
    });
    return archetypes;
  }

  cardsbyarchetype(id:string):any[]{
    this.url = 'https://db.ygoprodeck.com/api/v6/cardinfo.php?archetype=' + id.toString();
    let archetypes: any[] = [];
    this.http.get(this.url).subscribe(params => {
      for (let i = 0; i < (params as Array<any>).length; i++) {
        archetypes.push(params[i]);
      }
    });
    return archetypes;
  }

  search(value: string, arch: string):any[] {
    if (arch==""){
      return this.allcards.filter(card => card.name.toLowerCase().indexOf(value.toLowerCase())!=-1);
    }
    else{
      return this.cardsbyarchetype(arch).filter(card => card.name.toLowerCase().indexOf(value.toLowerCase())!=-1);
    }
  }

  getCard(id: string): any[]{
    let card: any[] = [];
      this.http.get('https://db.ygoprodeck.com/api/v6/cardinfo.php?name=' + id).subscribe(params => {
        card.push(params[0]);
      });
      return card;
  }

  searchbyid(carta: string){
    return this.allcards.find(card => card.id.toString() === carta.substring(0,carta.length-1));
  }

  compare(id: string){
    return this.allcards.find(card => card.id === id);
  }

}
