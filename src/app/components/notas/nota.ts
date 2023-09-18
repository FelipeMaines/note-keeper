export class Nota{
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;
  categoriaId: number;
  arquivada?: boolean = false;

  constructor(titulo: string, conteudo: string, tema: Tema, CategoriaId:number ,id?: number) {
    this.id = id;
    this.categoriaId = CategoriaId;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.tema = tema;
  }
}
  type Tema = 'info' | 'warning' | 'danger' | 'dark';

