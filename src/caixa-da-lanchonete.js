import { calculaValorCompra } from "./regras-de-negocio";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        return calculaValorCompra(metodoDePagamento, itens);
    }

}

export { CaixaDaLanchonete };