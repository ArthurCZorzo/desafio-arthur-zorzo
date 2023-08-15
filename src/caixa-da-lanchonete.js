import { calculaValorCompra } from "./regras-de-negocio";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        //const regrasDeNegocio = require('./regras-de-negocio');
        return calculaValorCompra(metodoDePagamento, itens);
    }

}

export { CaixaDaLanchonete };