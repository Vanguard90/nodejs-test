import { Component, OnInit } from '@angular/core';
import { CatsService } from './cats-service/cats-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private catsService: CatsService) {}

  ngOnInit() {

  }

  getCatsFunction(arg: string): void {

    switch (arg) {
      case 'all':
        this.catsService.getAllCats().subscribe(
          allCats => console.log(allCats)
        );
        break;
      default:
        break;
    }
  }
}
