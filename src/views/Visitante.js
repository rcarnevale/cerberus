import React from 'react';
import InputCustom from '../components/InputCustom';
import ReqService from '../service/RequisicoesService';

class Visitante extends React.Component {

    constructor(){
        super();
        this.state = {nome:'', casa:'', carro: '', data:''}
    }

    salvaAlteracao(nomeInput, event){
        let campoAlterado = {};
        campoAlterado[nomeInput] = event.target.value;
        this.setState(campoAlterado);
    }

    enviaForm(event){
        event.preventDefault();
        
        ReqService.criaVisitante({nome:this.state.nome, casa:this.state.casa, carro:this.state.carro, data:this.state.data})
        .then(res => ReqService.trataErro(res))
        .catch(alert('Erro no envio do formulário.'))       
    }

    render(){
        return(
            <div className='content'>
                <div className='header'>
                    <b>Cadastro de Visitantes</b>
                </div>
                <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm.bind(this)} method="post">
                    <InputCustom id="nome" type="text" name="nome" value={this.state.nome} onChange={this.salvaAlteracao.bind(this, "nome")} label="Nome"/>
                    <InputCustom id="casa" type="text" name="casa" value={this.state.casa} onChange={this.salvaAlteracao.bind(this, "casa")} label="Número da Casa"/>
                    <InputCustom id="carro" type="text" name="carro" value={this.state.carro} onChange={this.salvaAlteracao.bind(this, "carro")} label="Placa do Carro"/>
                    <InputCustom id="data" type="date" name="data" value={this.state.data} onChange={this.salvaAlteracao.bind(this, "data")} label="Data"/>                                              
                    <div className="pure-control-group">                                  
                        <label></label> 
                        <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                    </div>
                </form>             

                </div>
                
            </div>
        )
    }
}
export default Visitante;