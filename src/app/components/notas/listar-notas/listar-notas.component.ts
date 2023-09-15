import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from 'src/app/nota.service';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../../categoria';
import { CategoriaService } from '../../categoria.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit {
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  constructor(private notaService: NotaService,private categoriaService: CategoriaService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.PegarCategorias();
    this.PegarNotas();
  }

  filtrarPorCategoria(idCategoria: number | undefined){
    
    alert('entrei ' + "id: " + idCategoria)

    this.notaService.selecionarTodosComIdCategoria(idCategoria!).subscribe(res => this.notas = res);
  }

  PegarCategorias() {
    this.categoriaService.selecionarTodos().subscribe(res => this.categorias = res);
  }

  private PegarNotas() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);

    if (id != undefined) {
      this.notaService.selecionarTodosComIdCategoria(id).subscribe(n => {
        this.notas = n;
      });
    } else {
      this.notaService.selecionarTodos().subscribe(n => {
        this.notas = n;
      });
    }
  }
}
