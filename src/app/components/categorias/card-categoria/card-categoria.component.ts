import { Component, Input } from '@angular/core';
import { Categoria } from '../../categoria';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  navegateToNotes(id: number | undefined){
    this.router.navigate([`categorias/${id}/notas`])
  }
}
