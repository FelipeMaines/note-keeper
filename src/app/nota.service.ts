import { createInjectableType } from "@angular/compiler";
import { Nota } from "./components/notas/nota";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'root',
})
export class NotaService {
    private api_url = `${ environment.API_URL}/api/notas`;
    constructor(private http: HttpClient) { }


    excluir(nota: Nota) {
        console.log(this.api_url + '/' + nota.id);

        return this.http.delete<Nota>(this.api_url + '/' + nota.id)

    }

    criar(nota: Nota) {
        return this.http.post<Nota>(this.api_url, nota)
    }

    editar(nota: Nota) {
       return this.http.put<Nota>(this.api_url + '/' + nota.id , nota)
    }

    selecionarTodos() {
        return this.http.get<Nota[]>(this.api_url);
    }

    selecionarTodosComIdCategoria(idCategoria: number) {
        return this.http.get<Nota[]>(`${environment.API_URL}/api/categorias/${idCategoria}/notas`);
    }

    arquivarNota(nota: Nota){
        console.log(nota);

        return this.http.put<Nota>(this.api_url + '/' + nota.id , nota)
    }

    selecionarPorId(id: number){
        return this.http.get<Nota>(this.api_url + '/' + id);
    }
}