import React from 'react';
import ReactDOM from 'react-dom';

import { Content } from './components/content.component.jsx';

export class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      titulo: 'Holaa!'
    }
  }

  //Antes de montar el componente
  componentWillMount() {
    console.log('Before mount...');
  }

  //Despues de montar el componente
  componentDidMount() {
    console.log('Mount');
  }

  //Se invocará antes del render, justo antes que tu componente se haya actualizado (recibiendo nuevas props o state).
  componentWillUpdate() {
    console.log('Update MyComponent');
  }

  //Se invoca inmediatamente después del render, justo cuando tu componente a cambiado.
  componentDidUpdate(prevProps, prevState) {
    console.log('prevPros or prevState');
  }

  render() {
    return (
      <Content />
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
