import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DishesModel } from '@app/models/dishes.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from "@app/core/base/baseService";

@Injectable({
  providedIn: 'root'
})
export class DishesService extends BaseService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'dishes';
  }

  getAll(): Observable<DishesModel[]> {
    return this.http.get<DishesModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<DishesModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<DishesModel>(path).pipe(catchError(this.handleError));
  }

  insert(e: DishesModel): Observable<DishesModel> {
    return this.http.post<DishesModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: DishesModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
