import { Component, Input } from '@angular/core';
import { Categoria } from '../../categoria';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent {
  @Input() categoria: Categoria = {
    titulo: "vazio",
    id: 0
  }
}
