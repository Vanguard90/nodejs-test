import { Component, OnInit } from '@angular/core';
import { CatsService } from './cats-service/cats-service';
import { ICat, IAllCats } from './cats-service/cats-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'NodeJS + Angular test app';
  allCats: ICat[];

  constructor(private catsService: CatsService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {

    this.catsService.getAllCats().subscribe(
      allCatsResponse => {
       this.allCats = allCatsResponse.cats;
       console.log(this.allCats);
     });
  }

  getSingleCat(): void {
    const singleCat = this.allCats[Math.floor(Math.random() * this.allCats.length)];
    console.log(singleCat);
  }
}
