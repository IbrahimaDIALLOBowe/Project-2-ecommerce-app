import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any):Observable<any>{
    return this.http.post<any>('https://fakestoreapi.com/auth/register', data)

  }
  login(data:any){
    return this.http.post<any>('https://fakestoreapi.com/auth/login', data)
  }
}
