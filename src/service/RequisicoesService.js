const ReqService = {
    listaMoradores: () => {
        return fetch(/*falta o endereço*/);
    },

    criaMorador: morador => {
        return fetch(/*falta o endereço*/, {method: 'POST', headers: {'content-type': 'application/json'}, body:morador})
    },
    
    listaVisitante: () => {
        return fetch(/*falta o endereço*/);
    },

    criaVisitante: visitante => {
        return fetch(/*falta o endereço*/, {method: 'POST', headers: {'content-type': 'application/json'}, body: visitante})
    },

    trataErro: res => {
        if(!res.ok){
            throw new Error(res.responseText)
        }
        return res.json();
    }
}

export default ReqService;