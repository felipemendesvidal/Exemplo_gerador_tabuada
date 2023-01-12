function gerar_tabuada() {
    
    //pegar data atual
    let  numero_da_tabuada = document.getElementById('numero_tabuada');
    let select_de_resultados = document.getElementById('select_da_tabuada');

    if(numero_da_tabuada.value == 0){
        alert('por favor digite um numero');
    }else{

        let valor_da_tabuada_convertido = Number(numero_da_tabuada.value);
        let numero_contador = 1;
        // lipar o select
        select_de_resultados.innerHTML='';

        while(numero_contador <= 100){
            // criando elemento do tipo opção 
            let elemento_criado_por_js = document.createElement('option');

            // formatação do texto
            elemento_criado_por_js.text = `${valor_da_tabuada_convertido} x ${numero_contador} = ${valor_da_tabuada_convertido*numero_contador}`;
            //adiciona um filho item
            select_de_resultados.appendChild (elemento_criado_por_js);

            numero_contador++;
        }
        


    }
    

    
    
}


