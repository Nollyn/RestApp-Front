import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExtrasModel } from '@app/models/extras.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base/baseService';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService extends BaseService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.apiUrl + 'Extra';
   }

  getAll(): Observable<ExtrasModel[]> {
    return this.http.get<ExtrasModel[]>(this.url).pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<ExtrasModel> {
    let path = `${this.url}/${id}`;
    return this.http.get<ExtrasModel>(path).pipe(catchError(this.handleError));
  }

  insert(e: ExtrasModel): Observable<ExtrasModel> {
    return this.http.post<ExtrasModel>(this.url, e).pipe(catchError(this.handleError));
  }

  update(e: ExtrasModel): Observable<boolean> {
    return this.http.put<boolean>(this.url, e).pipe(catchError(this.handleError));
  }
}
