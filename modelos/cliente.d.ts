import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";
export default class Cliente {
    nome: string;
    nomeSocial: string;
    dataNascimento: Date;
    dataCadastro: Date;
    telefones: Telefone[];
    endereco: Endereco;
    documentos: Documento[];
    dependentes: Cliente[];
    titular: Cliente;
    segredo(): string;
}
//# sourceMappingURL=cliente.d.ts.map