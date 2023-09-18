import { Component } from '@angular/core';
import { Categoria } from '../../categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent {

  categoria: Categoria;

  constructor(private route: ActivatedRoute, private categoriaService: CategoriaService, private router: Router, private toaster: ToastrService){
    this.categoria = new Categoria('asdsda', 2);
    let id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.categoriaService.selecionarPorId(id).subscribe(res => {
      this.categoria = res;
    })
  }

  excluirCategoria(){
    this.categoriaService.excluir(this.categoria.id!).subscribe();

    this.router.navigate(["/"]);
  }
}
