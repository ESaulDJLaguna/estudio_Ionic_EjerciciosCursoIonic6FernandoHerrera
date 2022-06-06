import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    // Lo único que quiero hacer es imprmir en consola la respuesta de la
    // petición, para evitar utilizar la función de flecha dentro del tap
    // solo utilizamos console.log. Esta instrucción es exactamente lo
    // mismo que el código comentado
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(tap(console.log));

    // return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
    //   tap((posts) => {
    //     console.log(posts);
    //   })
    // );
  }
}
