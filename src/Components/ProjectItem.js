import React, { Component } from 'react';
import PropTypes from 'prop-types' ;

class ProjectItems extends Component {

deleteProject(id){
    this.props.onDelete(this);
}
    
  render() {
    
    return(
      <li className = "ProjectItem ">
         <strong> {this.props.project.title}</strong>: {this.props.project.category} <a href= "#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a> 
      </li> 
    );
  }
}

ProjectItems.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
  }
  

export default ProjectItems;
    