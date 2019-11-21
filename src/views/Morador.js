import React from 'react';
import InputCustom from '../components/InputCustom';
import ReqService from '../service/RequisicoesService';

class Morador extends React.Component {

    constructor(){
        super();
        this.state = {nome:'', casa:'', email:''}
    }

    salvaAlteracao(nomeInput, event){
        let campoAlterado = {};
        campoAlterado[nomeInput] = event.target.value;
        this.setState(campoAlterado);
    }

    enviaForm(event){
        event.preventDefault();
        
        ReqService.criaMorador({nome:this.state.nome, casa:this.state.casa, email:this.state.email})
        .then(res => ReqService.trataErro(res))
        .catch(alert('Erro no envio do formulário.'))       
    }

    render(){
        return(
            <div className='content'>
                <div className='header'>
                    <b>Cadastro de Moradores</b>
                </div>
                <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm.bind(this)} method="post">
                    <InputCustom id="nome" type="text" name="nome" value={this.state.nome} onChange={this.salvaAlteracao.bind(this, "nome")} label="Nome"/>
                    <InputCustom id="casa" type="text" name="casa" value={this.state.casa} onChange={this.salvaAlteracao.bind(this, "casa")} label="Número da Casa"/>
                    <InputCustom id="email" type="email" name="email" value={this.state.email} onChange={this.salvaAlteracao.bind(this, "email")} label="Email"/>                                              
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
export default Morador;