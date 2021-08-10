import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/Addproject';
import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor(){
    super();
    this.state = {
      project:[],
      todos:[]
    }
  }

getTodos(){
  $.ajax({
    url:'https://jsonplaceholder.typicode.com/todos',
    dataType:'json',
    cache: false,
    success: function(data){
this.setState({todos:data}, function(){
  console.log(this.state);
});
    }.bind(this),
    error:function(xhr, status, err){
      console.log(err);
    }
  });
}

getProject(){
  this.setState({projects:[
    {
      id: uuid(),
      title: 'business Website',
      category: 'Mobile Design' 
      },
    {
      id: uuid(),
      title: 'Social App',
      category: 'Mobile Development' 
      },
    {
      id: uuid(),
      title: 'Ecommerce Shopping Cart',
      category: 'Mobile Development' 
      },
  ]});
}

  componentWillMount(){
    this.getProject();
    this.getTodos();
  };
  
  componentDidMount(){
    this.getTodos();

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState ({projects:projects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id===id);
    projects.splice(index,1);
    this.setState({project:projects});
  }

  render() {
    return(
      <div className = "App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
       
        <Projects projects= {this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

      </div>
    );  
  }
}

export default App;

