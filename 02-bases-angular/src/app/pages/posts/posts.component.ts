import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  mensajes: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Es necesario desuscribirnos al observable para evitar pérdidas
    // de memoria. Una manera más fácil de hacer esto es que en vez de
    // suscribirnos, 'this.mensajes' obtendrá un apuntador al observable
    // que regresa 'this.dataService.getPosts()', para mostrar la
    // información, necesitamos utilizar en la plantilla el pipe 'async'
    // de esta forma, mostrará la inforamción cuando sea recuperada.
    // Como ya no es posible mostrar la respuesta que está devolviendo la
    // petición, en el data.service.ts usaremos la función 'tap'
    this.mensajes = this.dataService.getPosts();
  }

  escuchaClick(id: number) {
    console.log('Click en:', id);
  }
}
