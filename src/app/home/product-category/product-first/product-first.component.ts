import { Component } from '@angular/core';
// import SwiperCore, { SwiperOptions, Navigation, Pagination, Autoplay } from 'swiper';

// SwiperCore.use([Navigation, Autoplay])

@Component({
  selector: 'app-product-first',
  templateUrl: './product-first.component.html',
  styleUrls: ['./product-first.component.css']
})
export class ProductFirstComponent {
  companies: string[] = ["philips", "amazon", "pidilite", "panasonic", "eastman", "dksh", "greenpanel", "nokia"];
  countries: any[] = [
    { country: "bangladesh", direction: "import" },
    { country: "bangladesh", direction: "export" },
    { country: "chile", direction: "import" },
    { country: "chile", direction: "export" },
    { country: "ethiopia", direction: "import" },
    { country: "ethiopia", direction: "export" },
    { country: "russia", direction: "import" },
    { country: "russia", direction: "export" },
    { country: "turkey", direction: "import" },
    { country: "turkey", direction: "export" },
    { country: "philippines", direction: "import" },
    { country: "philippines", direction: "export" },
  ];
  // config: SwiperOptions = {
  //   slidesPerView: 4,
  //   lazy: true,
  //   spaceBetween: 50,
  //   navigation: true,
  //   speed: 1000,
  //   loop: true,
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false
  //   },
  //   pagination: { clickable: true },
  //   scrollbar: { draggable: false },
  // };
}
