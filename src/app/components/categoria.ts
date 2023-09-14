export class Categoria {
    id?: number;
    titulo: string;

    constructor(Titulo: string, Id: number){
        this.titulo = Titulo;
        this.id = Id;
    }
}
