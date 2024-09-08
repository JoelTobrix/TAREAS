import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iiva } from '../Interfaces/Iiva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IvaService {
  apiurl ='http://localhost/03MVC/controllers/iva.controller.php?op=';

  constructor(private lector: HttpClient) {}

  todos(): Observable<Iiva[]> {
    return this.lector.get<Iiva[]>(this.apiurl + 'todos');
  }
}