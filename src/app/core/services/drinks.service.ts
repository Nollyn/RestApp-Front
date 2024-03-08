import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrinksModel } from '@app/models/drinks.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class DrinksService extends BaseService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'Drink';
   }

  getAll(): Observable<DrinksModel[]> {
    return this.http.get<DrinksModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<DrinksModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<DrinksModel>(path).pipe(catchError(this.handleError));
  }
  insert(e: DrinksModel): Observable<DrinksModel> {
    return this.http.post<DrinksModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: DrinksModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
