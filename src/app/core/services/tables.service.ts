import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TablesModel } from '@app/models/tables.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class TablesService extends BaseService{
  private readonly url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'Table';
   }

  getAll(): Observable<TablesModel[]> {
    return this.http.get<TablesModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<TablesModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<TablesModel>(path).pipe(catchError(this.handleError));
  }

  insert(e: TablesModel): Observable<TablesModel> {
    return this.http.post<TablesModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: TablesModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
