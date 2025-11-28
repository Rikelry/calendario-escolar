import { Evento } from "./Evento";

export class Calendario {
  private eventos: Evento[] = [];

  adicionarEvento(evento: Evento) {
    this.eventos.push(evento);
  }

  obterEventosPorDia(data: Date): Evento[] {
    return this.eventos.filter(
      (e) => e.data.toDateString() === data.toDateString()
    );
  }

  obterEventos(): Evento[] {
    return this.eventos;
  }
}
