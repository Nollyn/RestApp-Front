import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OptionsModel } from '@app/models/options.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class OptionsService extends BaseService{

  private readonly url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'options';
   }

  getAll(): Observable<OptionsModel[]> {
    return this.http.get<OptionsModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<OptionsModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<OptionsModel>(path).pipe(catchError(this.handleError));
  }

  insert(e: OptionsModel): Observable<OptionsModel> {
    return this.http.post<OptionsModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: OptionsModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
