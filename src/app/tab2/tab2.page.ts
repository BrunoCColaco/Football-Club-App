import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PLAYERS } from '../players';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  players = PLAYERS;
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  selected_index = 0;

  constructor(private actionSheetController: ActionSheetController,public modalCtrl: ModalController) {

  }
  ngOnInit() {

  }
  async openMenu() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Player',
      mode: 'ios',
      buttons: [{
        text: 'Play Video',
        icon: 'play-circle',
        handler: () => {
          console.log(this.selected_index);
          this.presentModal();
        }
      }, {
        text: 'Follow',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  onSlideChange() {
    console.log("change");
    this.selected_index = this.swiperRef?.nativeElement.swiper.activeIndex;
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    
  }

  async presentModal() {
    let url = this.players[this.selected_index].url;
    const modal = await this.modalCtrl.create({
    component: ModalpagePage,
    componentProps: { value: url }
    });
    return await modal.present();
    }
}
