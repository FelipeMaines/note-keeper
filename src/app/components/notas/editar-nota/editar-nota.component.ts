import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from 'src/app/nota.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
  nota: Nota;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private router: Router, private toaster: ToastrService) {
    this.nota = new Nota('', '', 'dark', 0)
  }
  ngOnInit(): void {

    const id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.notaService.selecionarPorId(id).subscribe(n => {
      this.nota = n;
    });
  }

  editarNota() {

    this.notaService.editar(this.nota).subscribe();

    this.toaster.success(`${this.nota.titulo} editado com sucesso`, 'Sucesso')

    this.router.navigate(['/notas', 'listar'])
  }
}
