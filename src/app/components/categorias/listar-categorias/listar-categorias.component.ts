import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../categoria';
import { CategoriaService } from '../../categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})

export class ListarCategoriasComponent implements OnInit{
  categorias: Categoria[] = [];

  constructor(private servicoCategoria: CategoriaService){

  }
  ngOnInit(): void {
    this.servicoCategoria.selecionarTodos().subscribe(res => this.categorias = res);
  }

  
}
