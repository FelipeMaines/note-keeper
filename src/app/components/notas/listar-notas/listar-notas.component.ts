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
    this.notaService.selecionarTodosComIdCategoria(idCategoria!).subscribe(res => {
      let valores: Nota[] = res.filter(n => n.arquivada == false)
      this.notas = valores;
    });
  }

  PegarCategorias() {
    this.categoriaService.selecionarTodos().subscribe(res => this.categorias = res);
  }

  private PegarNotas() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);

    if (id != undefined && !Number.isNaN(id)) {

      this.notaService.selecionarTodosComIdCategoria(id).subscribe(n => {
        let valores: Nota[] = n.filter(res => res.arquivada == false)
        console.log('numero')
        console.log(valores);
        this.notas = valores;
      });
    } else {
      this.notaService.selecionarTodos().subscribe(n => {
        let valores = n.filter(res => res.arquivada == false)
        console.log('numero')

        console.log(valores);
        this.notas = valores;
      });
    }
  }
}
