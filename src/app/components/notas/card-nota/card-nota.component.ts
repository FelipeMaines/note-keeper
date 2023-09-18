import { Component, Input } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from 'src/app/nota.service';

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

  constructor(private servicoNota: NotaService) {}

  arquivaNota() {
    if (this.nota.arquivada == false)
      this.nota.arquivada = true;
    else
      this.nota.arquivada = false;

    this.servicoNota.arquivarNota(this.nota).subscribe();
    
    location.reload()
  }
}
