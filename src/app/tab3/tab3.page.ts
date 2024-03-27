import { Component } from '@angular/core';
import { VIDEOS } from '../videos';
import { NavController } from '@ionic/angular/common';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  videos = VIDEOS;
  constructor(public nav: NavController) {}
  OpenNavVideoPlay(id:number) {
  this.nav.navigateForward("/videoplay/" + id);
  console.log ("teste" + id);
  }
 }
