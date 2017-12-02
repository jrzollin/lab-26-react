import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import faker from 'faker';
import {say, SQUIRREL, DEFAULT, VADER, SKELETON} from 'cowsay';

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

    this.handleCowSay = this.handleCowSay.bind(this);
    this.updateStateSay = this.updateStateSay.bind(this);
    this.updateStateCow = this.updateStateCow.bind(this);
    this.chooseCowReg = this.chooseCowReg.bind(this);
    this.chooseCowDarth = this.chooseCowDarth.bind(this);
    this.chooseCowSkeleton = this.chooseCowSkeleton.bind(this);

    this.state = {
      content: 'Moo',
      cow: DEFAULT
    };

  }

  handleCowSay(e){
    this.updateStateSay(this.state.content);
  }

  updateStateSay(content){
    let comment = faker.fake('{{lorem.words}}');
    this.setState({content: comment});
  }

  chooseCowReg(e){
    this.updateStateCow(DEFAULT);
  }

  chooseCowDarth(e){
    this.updateStateCow(VADER);
  }

  chooseCowSkeleton(e){
    this.updateStateCow(SKELETON);
  }

  updateStateCow(choice){
    this.setState({cow: choice});
  }

  render(){
    return (
      <div>
        <Header />
        <pre>{say({text: this.state.content, cow: this.state.cow})}</pre>
        <button onClick={this.handleCowSay}>Poke the cow</button>
        <button onClick={this.chooseCowReg}>Regular Cow</button>
        <button onClick={this.chooseCowDarth}>Vader Cow</button>
        <button onClick={this.chooseCowSkeleton}>Skeleton Cow</button>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
