import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenusModel } from '@app/models/menus.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class MenusService extends BaseService {

  private readonly url: string;
  private readonly getByDateUrl: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'Menu';
   }

  getAll(): Observable<MenusModel[]> {
    return this.http.get<MenusModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<MenusModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<MenusModel>(path).pipe(catchError(this.handleError));
  }

  insert(e: MenusModel): Observable<MenusModel> {
    return this.http.post<MenusModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: MenusModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
