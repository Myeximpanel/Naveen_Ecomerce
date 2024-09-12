import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  config: SwiperOptions = {
    slidesPerView: 5,
    lazy: true,
    spaceBetween: 50,
    navigation: true,
    speed: 1000,
    loop: false,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false
    // },
    pagination: { clickable: true },
    scrollbar: { draggable: false },
  };

}
