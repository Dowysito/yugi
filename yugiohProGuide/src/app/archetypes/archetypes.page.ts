import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CardsServiceService} from '../service/cards-service.service';

@Component({
  selector: 'app-archetypes',
  templateUrl: './archetypes.page.html',
  styleUrls: ['./archetypes.page.scss'],
})
export class ArchetypesPage implements OnInit {
  archetypes: any[] = [];
  id: any;

  constructor(private http: HttpClient, private router: Router, private service: CardsServiceService) {
    // tslint:disable-next-line:triple-equals
      this.archetypes = service.archetypes();
  }

  ngOnInit() {
  }


  // tslint:disable-next-line:variable-name
  buscar(archetype_name: any) {
    this.router.navigate(['/list', 'Arch:' + archetype_name]);
  }
}
