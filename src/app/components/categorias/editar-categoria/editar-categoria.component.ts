import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from 'src/app/nota.service';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../../categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit{

  categoria: Categoria;

constructor(private route: ActivatedRoute, private categoriaService: CategoriaService, private router: Router, private toaster: ToastrService){
this.categoria = new Categoria('asdsa', 2123123);
}

  ngOnInit(): void {
     const id: number = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.categoriaService.selecionarPorId(id).subscribe(n => {
      this.categoria = n;
  })
}

editarCategoria(){
  this.categoriaService.editar(this.categoria).subscribe();

  this.router.navigate(["/"])
}
}
