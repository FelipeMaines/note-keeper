import { Component, OnInit } from "@angular/core";
import { Nota } from "../nota";
import { NotaService } from "src/app/nota.service";
import { Router } from "@angular/router";
import { Categoria } from "../../categoria";
import { CategoriaService } from "../../categoria.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls: ['./criar-nota.component.css'],
})

export class CriarNotaComponent implements OnInit  {
    nota: Nota;
    categorias: Categoria[] = [];
  
    constructor(private notaService: NotaService, private categoriaService: CategoriaService ,private router: Router,  private toaster: ToastrService) {
      this.nota = new Nota(
        'Lavar o cachorro 🦮',
        'Pegar a toalha > pegar o shampoo',
        'dark',
        0,
        0
      );
    }

  ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe(res => this.categorias = res);
  }
  
    criarNota() {
      this.notaService.criar(this.nota).subscribe();

      this.toaster.success("Nota criada com sucesso!");
        
      this.router.navigate(['/notas', 'listar'])
    }
  }