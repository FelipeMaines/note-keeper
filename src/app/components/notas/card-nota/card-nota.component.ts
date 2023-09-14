import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class CardNotaComponent {
@Input() nota: Nota = {
  id: 0,
  titulo: "Nada inserido",
  conteudo: "Nada inserido",
  tema: 'dark',
} 
}
