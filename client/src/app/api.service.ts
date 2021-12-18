import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './models/product.model';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/user/login', { email, password }, {
      observe: 'body',
      responseType: 'text'
    });
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('products', {
      headers: {},
    });
  }

  getUserLists(){
    console.log("tojkennnnn", localStorage.getItem('auth-token'));
    
    var headers_object = new HttpHeaders().set("auth-token", JSON.stringify(localStorage.getItem('auth-token')));
    return this.http.get('http://localhost:3000/api/user/lists',{
      headers: {
        'auth-token': JSON.stringify(localStorage.getItem('auth-token'))
      }
    },)
  }
}
