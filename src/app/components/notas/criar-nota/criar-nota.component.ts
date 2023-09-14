import { Component } from "@angular/core";
import { Nota } from "../nota";
import { NotaService } from "src/app/nota.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls: ['./criar-nota.component.css'],
})

export class CriarNotaComponent {
    nota: Nota;
  
    constructor(private notaService: NotaService, private router: Router) {
      this.nota = new Nota(
        'Lavar o cachorro 🦮',
        'Pegar a toalha > pegar o shampoo',
        'dark',
        0
      );
    }
  
    criarNota() {
      this.notaService.criar(this.nota).subscribe();
        
      this.router.navigate(['/notas', 'listar'])
    }
  }