export class Evento {
  constructor(
    public titulo: string,
    public data: Date,
    public tipo: "prova" | "feriado" | "evento" | "aula"
  ) {}
}
