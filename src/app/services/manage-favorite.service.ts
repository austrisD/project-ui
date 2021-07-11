import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ManageFavoriteService {
  private apiUrl = 'http://localhost:5000/favorite';
  constructor(private http: HttpClient) {}

  getFavorites(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addFavorites(Record: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, Record, httpOptions);
  }

  deleteFavorite(Record: any): Observable<any> {
    const url = `${this.apiUrl}/${'record.id'}`;
    return this.http.delete<any>(url);
  }
  
  changeFavoriteData() {}
}
