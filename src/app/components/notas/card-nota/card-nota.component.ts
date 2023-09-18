import { Component, Input } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from 'src/app/nota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class CardNotaComponent {
@Input() nota: Nota = {
  id: 0,
  categoriaId: 0,
  titulo: "Nada inserido",
  conteudo: "Nada inserido",
  tema: 'dark',
  arquivada: false
} 

constructor(private servicoNota: NotaService, private router: Router){

}

arquivaNota(){
  this.nota.arquivada = true;

  this.servicoNota.arquivarNota(this.nota).subscribe();

  this.router.navigate(['/']);

  this.router.navigate(['/notas/listar']);

}

}
