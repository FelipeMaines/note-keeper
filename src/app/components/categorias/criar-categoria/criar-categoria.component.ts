import { Component } from '@angular/core';
import { Categoria } from '../../categoria';
import { CategoriaService } from '../../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent {
  categoria: Categoria = {
    titulo: '',
    id: 0
  }

  constructor(private servicoCategoria: CategoriaService, private router: Router){

  }

  criarCategoria(){
    this.servicoCategoria.Criar(this.categoria).subscribe();

    this.router.navigate(["categorias/listar"]);
  }
}
