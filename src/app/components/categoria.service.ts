import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "./categoria";

@Injectable({
    providedIn: 'root',
})

export class CategoriaService {

    constructor(private http: HttpClient) { }
    url: string = "http://localhost:3000/categorias";

    Criar(categoria: Categoria) {
        return this.http.post<Categoria>(this.url, categoria);
    }

    selecionarTodos() {
        return this.http.get<Categoria[]>(this.url);
    }

    selecionarPorId(id: number) {
        return this.http.get<Categoria>(this.url + "/" + id);
    }

    excluir(id: number) {
        console.log(this.url + '/' + id);

        return this.http.delete<Categoria>(this.url + '/' + id)
    }

    editar(categoria: Categoria) {
        return this.http.put<Categoria>(this.url + '/' + categoria.id, categoria)
    }

}