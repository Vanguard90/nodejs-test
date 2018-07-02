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
  allCats: IAllCats;

  constructor(private catsService: CatsService) { }

  ngOnInit() {

  }

  getCats(): void {

    this.catsService.getAllCats().subscribe(
      allCatsResponse => {
       this.allCats = allCatsResponse;
       console.log(this.allCats);
     });
  }

  getSingleCat(): void {
    // Fill it up.
  }
}
