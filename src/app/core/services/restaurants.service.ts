import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantsModel } from '@app/models/restaurants.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService extends BaseService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'restaurants';
   }

  getAll(): Observable<RestaurantsModel[]> {
    return this.http.get<RestaurantsModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<RestaurantsModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<RestaurantsModel>(path).pipe(catchError(this.handleError));
  }

  insert(e: RestaurantsModel): Observable<RestaurantsModel> {
    return this.http.post<RestaurantsModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: RestaurantsModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
