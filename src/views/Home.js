import React from 'react';
import {Link} from 'react-router-dom';

function Home (){

    return(
        <div>
        
            <header className='header'>Bem vindo ao sistema de cadastro Cerberus</header>
        
            <p className='centered-text'>Utilize o menu lateral para navegar.</p>
            <p className='centered-text'>Para cadastro de Moradores, clique em <Link to="/morador">Moradores</Link>.</p>
            <p className='centered-text'>Para cadastro de Visitantes, clique em <Link to="/visitante">Visitantes</Link>.</p>
        
        </div>
    )
}

export default Home;