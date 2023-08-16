function existe(arr, alvo){
    var existe = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == alvo){
            existe = true;
            break;
        } else{
            existe = false;
        }
    }
    
    if(existe){
        return true;
    } else {
        return false;
    }
}

function pagamento(formaPagamento, somatorio){
    var valorFinal = 0;
    switch(formaPagamento){
        case "dinheiro":
            valorFinal = somatorio - (somatorio * 0.05);
            return valorFinal;
        case "debito":
            valorFinal = somatorio;
            return valorFinal;
        case "credito":
            valorFinal = somatorio + (somatorio * 0.03);
            return valorFinal;
        case "default":
            return "Forma de Pagamento Inválida!";
    }
}

function calculaValorCompra(formaPagamento, itens) {
    var codigo = []
    var qntd = []
    var somatorio = 0;
    var final = 0;
    
    var chantily = false;
    var queijo = false;
    var combo1 = false;
    var combo2 = false;
    
    if(itens.length == 0){
        return "Não há itens no carrinho de compra!"
    } else {
        for(var i = 0; i < itens.length; i++){
            var posVirgula = itens[i].indexOf(",")
            codigo[i] = itens[i].substring(0, posVirgula)
            qntd[i] = itens[i].substring(posVirgula+1, itens[i].length)
            if(qntd[i] == 0){
                return "Quantidade inválida!";
            }
        }
    }
    
    for(var i = 0; i < codigo.length; i++){
        var valor = 0;
        switch(codigo[i]){
            case "cafe":
                valor += 3 * qntd[i];
                break;
            case "chantily":
                valor += 1.5 * qntd[i];
                chantily = true;
                break;
            case "suco":
                valor += 6.2 * qntd[i];
                break;
            case "sanduiche":
                valor += 6.5 * qntd[i];
                break;
            case "queijo":
                valor += 2 * qntd[i];
                queijo = true;
                break;
            case "salgado":
                valor += 7.25 * qntd[i];
                break;
            case "combo1":
                valor += 9.50 * qntd[i];
                combo1 = true;
                break;
            case "combo2":
                valor += 7.50 * qntd[i];
                combo2 = true;
                break;
            default:
                return "Item inválido!"
        }
        somatorio += valor;
    }
    
    if(chantily){
        var cafeExiste = existe(codigo, "cafe");
        if(cafeExiste){
            final = pagamento(formaPagamento, somatorio);
        } else {
            return "Item extra não pode ser pedido sem o principal";
        }
    }
    
    if(queijo){
        var sanduicheExiste = existe(codigo, "sanduiche");
        if(sanduicheExiste){
            final = pagamento(formaPagamento, somatorio);
        } else {
            return "Item extra não pode ser pedido sem o principal";
        }
    }
    
    if(combo1 || combo2){
        var cafeExiste = existe(codigo, "cafe");
        var sucoExiste = existe(codigo, "suco");
        var sanduicheExiste = existe(codigo, "sanduiche");
        var salgadoExiste = existe(codigo, "salgado");
        
        if(cafeExiste || sucoExiste || sanduicheExiste || salgadoExiste){
            final = pagamento(formaPagamento, somatorio);
        } else {
            return "Item extra não pode ser pedido sem o principal";
        }
    }
    
    if(!chantily && !queijo && !combo1 && !combo2){
        final = pagamento(formaPagamento, somatorio);
    }
    
    if(typeof final == "number"){
        var formatado = (final.toFixed(2)).toString().replace(".",",")
        return "R$ "+ formatado;
    } else {
        return "Forma de pagamento inválida!";
    }
}

export { calculaValorCompra };