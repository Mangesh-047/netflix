import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../../services/movies.service';
import { Imovie } from '../../model/movies';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  MoviesArray: Array<Imovie> = []

  constructor(
    private _moviesService: MoviesService

  ) { }

  ngOnInit(): void {
    this._moviesService.getLetTredMovies()
      .subscribe(
        res => {
          console.log(res);

          this.MoviesArray = res

        }
      )
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
