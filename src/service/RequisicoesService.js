const ReqService = {
    listaMoradores: () => {
        return fetch('http://endereço.aqui.com');
    },

    criaMorador: morador => {
        return fetch('http://endereço.aqui.com', {method: 'POST', headers: {'content-type': 'application/json'}, body:morador})
    },
    
    listaVisitante: () => {
        return fetch('http://endereço.aqui.com');
    },

    criaVisitante: visitante => {
        return fetch('http://endereço.aqui.com', {method: 'POST', headers: {'content-type': 'application/json'}, body: visitante})
    },

    trataErro: res => {
        if(!res.ok){
            throw new Error(res.responseText)
        }
        return res.json();
    }
}

export default ReqService;