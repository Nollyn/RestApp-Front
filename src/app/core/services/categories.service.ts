import { Injectable } from '@angular/core';
import { CategoriesModel } from '@app/models/categories.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base/baseService';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService {

  private url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'categories';
  }

  getAll(): Observable<CategoriesModel[]> {
    return this.http.get<CategoriesModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<CategoriesModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<CategoriesModel>(path).pipe(catchError(this.handleError));
  }

  insert(e: CategoriesModel): Observable<CategoriesModel> {
    return this.http.post<CategoriesModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: CategoriesModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
