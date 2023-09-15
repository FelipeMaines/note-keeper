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
}