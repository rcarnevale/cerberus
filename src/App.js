import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <div id="menu">
            <div className="pure-menu">
                <Link className="pure-menu-heading" to="/">Cerberus</Link>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><Link to="/visitante" className="pure-menu-link">Visitante</Link></li>
                    <li className="pure-menu-item"><Link to="/morador" className="pure-menu-link">Morador</Link></li>
                    <li className="pure-menu-item"><Link to="/contato" className="pure-menu-link">Contato</Link></li>
                </ul>
            </div>
        </div>

        <div id="main">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
