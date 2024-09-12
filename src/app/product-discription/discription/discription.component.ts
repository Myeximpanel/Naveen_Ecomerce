

import { AfterViewInit, Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay])
declare const $: any;

@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.css']
})

export class DiscriptionComponent implements AfterViewInit {
  constructor() { }

  config: SwiperOptions = {
    slidesPerView: 5,
    lazy: true,
    spaceBetween: 50,
    navigation: true,
    speed: 1000,
    loop: false,
    pagination: { clickable: true },
    scrollbar: { draggable: false },
  };
  srcImg: string = "1-zoom-image-1";
  images: string[] = ["1-zoom-image-1", "2-zoom-image-2", "3-zoom-image-3", "4-zoom-image-4"];

  ngAfterViewInit(): void {
    this.onApplyEZplus();
    this.setDataAttr(this.images[0]);
  }

  onApplyEZplus() {
    try {
      $("#zoom_01").ezPlus({
        tint: true,
        tintColour: '#e0e0e0',
        tintOpacity: 0.5,
        borderSize: 0,
        easing: true,
        easingDuration: 1000,
        zoomWindowHeight: 550,
        zoomWindowWidth: 550
      });
    } catch (error) { }
  }

  onClickGallery(image: string) {
    this.srcImg = image;
    this.setDataAttr(image);
    setTimeout(() => { this.onApplyEZplus(); }, 200);
  }

  setDataAttr(image: string) {
    $("img").attr("data-zoom-image", `assets/Img_folder/${image}.webp`);
  }
}
