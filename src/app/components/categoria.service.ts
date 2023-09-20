import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "./categoria";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root',
})

export class CategoriaService {

    constructor(private http: HttpClient) { }
    url: string = `${environment.API_URL}/api/categorias`;

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