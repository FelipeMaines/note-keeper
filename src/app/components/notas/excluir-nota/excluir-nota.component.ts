import { Component } from '@angular/core';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from 'src/app/nota.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent {
  nota: Nota;

  constructor(private route: ActivatedRoute, private notaService: NotaService, private router: Router, private toaster: ToastrService){
    this.nota = new Nota('', '', 'dark', 0)
  }

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.notaService.selecionarPorId(id).subscribe(res => {
      this.nota = res;
    });
  }

  excluirNota(){

    console.log(this.nota);

    this.notaService.excluir(this.nota).subscribe();

    this.toaster.success('Nota excluida com sucesso', "Sucsses")

    this.router.navigate(['/notas', 'listar'])

  }
}
