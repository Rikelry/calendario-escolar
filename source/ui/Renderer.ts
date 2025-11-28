import { Calendario } from "../calendario/Calendario";

export class Renderer {
  constructor(private calendario: Calendario) {}

  renderizarCalendario(containerId: string, mes: number, ano: number) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();

    for (let dia = 1; dia <= diasNoMes; dia++) {
      const data = new Date(ano, mes, dia);
      const eventos = this.calendario.obterEventosPorDia(data);

      const elementoDia = document.createElement("div");
      elementoDia.classList.add("dia");

      elementoDia.innerHTML = `
        <strong>${dia}</strong>
        ${eventos.map((e) => `<span class="evento ${e.tipo}">${e.titulo}</span>`).join("")}
      `;

      container.appendChild(elementoDia);
    }
  }
}
