import { Calendario } from "../calendario/Calendario";
import { Evento } from "../calendario/Evento";
import { Renderer } from "./Renderer";

export class Interface {
  constructor(
    private calendario = new Calendario(),
    private renderer = new Renderer(calendario)
  ) {
    this.registrarEventosDeInterface();
    this.renderer.renderizarCalendario("calendario", 1, 2025);
  }

  private registrarEventosDeInterface() {
    document
      .getElementById("btnAdicionar")!
      .addEventListener("click", () => this.adicionarEvento());
  }

  adicionarEvento() {
    const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
    const data = new Date(
      (document.getElementById("data") as HTMLInputElement).value
    );
    const tipo = (document.getElementById("tipo") as HTMLSelectElement).value as
      | "prova"
      | "feriado"
      | "evento"
      | "aula";

    this.calendario.adicionarEvento(new Evento(titulo, data, tipo));
    this.renderer.renderizarCalendario("calendario", data.getMonth(), data.getFullYear());
  }
}
