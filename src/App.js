import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/Addproject';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects:[
        {
          title: 'business Website',
          category: 'Mobile Design' 
          },
        {
          title: 'Social App',
          category: 'Mobile Development' 
          },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Mobile Development' 
          },
      ]
    }
  }


  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState ({projects:projects})
  }

  render() {
    return(
      <div className = "App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
       
        <Projects projects= {this.state.projects} />

      </div>
    );  
  }
}

export default App;

