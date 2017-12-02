import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';

class Header extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <header>
        <h1>What does the cow say?</h1>
      </header>
    );
  }
}

class App extends React.Component {
  
  constructor(props){
    super(props);


  }
}

ReactDom.render(<Header/>, document.getElementById('root'));
