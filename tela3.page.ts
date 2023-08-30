import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela3',
  templateUrl: './tela3.page.html',
  styleUrls: ['./tela3.page.scss'],
})
export class Tela3Page implements OnInit {
  telefone: any;

  constructor(private activatedRoute: ActivatedRoute,  public router: Router) { }
  Home(){
    this.router.navigateByUrl('');
   }

  ngOnInit() {
    this.telefone = this.activatedRoute.snapshot.paramMap.get('telefone');
  }

}
