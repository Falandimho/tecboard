import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import "./formulario-de-evento.estilos.css";

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    console.log("Formulário submetido", formData);
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema');
      }),
      data: new Date(formData.get('data')),
      titulo: formData.get('nome'),
    }
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento</Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            name="nome"
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="http://..."
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="data">Data do evento</Label>
          <CampoDeEntrada type="date" id="data" name="data" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
