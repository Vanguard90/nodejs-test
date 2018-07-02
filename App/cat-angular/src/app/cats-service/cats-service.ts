import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICat, IAllCats } from './cats-interface';

@Injectable()
export class CatsService {

  constructor(
    private http: HttpClient
  ) {}

  getAllCats(): Observable<IAllCats> {
    return this.http.get<IAllCats>('http://localhost:8000/api/cats');
  }

  getCat(name: string): Observable<ICat> {
    return this.http.get<ICat>('http://localhost:8000/api/cats/' + name);
  }

  insertCat(cat: ICat): Observable<ICat> {
    return this.http.post<ICat>('http://localhost:8000/api/cats/', cat);
  }

  updateCat(cat: ICat): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/cats/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + name);
  }
}
