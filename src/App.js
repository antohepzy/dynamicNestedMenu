import React from 'react';
import './App.css';
import data from './data';
import {DropdownButton,Dropdown} from 'react-bootstrap';




class App extends React.Component {
	constructor(){
    super();
    this.state={}     
    }

    renderSubMenu(menuOptions){
    	const subMenu = Object.values(menuOptions).map((option,i) => {

    	
    		
    			return(
    				
    			<div>	
    			
       			{ option.children.length>0 

    				?
    			
    			<DropdownButton id="dropdown-button-drop-down"  variant="transparent"  title={option.item}>     			
    			{this.renderSubMenu(option.children)}</DropdownButton>
   				
    				:

       			<Dropdown.Item key={`item${i}`} style={{width:'505px'}}>{option.item}</Dropdown.Item>

       			}
       			<Dropdown.Divider /> 
       			</div>);

    			
    		
    	  
    		
    	});
    	return(
    	<div>{ subMenu }</div>);
    
    }

 
 render(){

 	return (
 		
 		<div>
 		<Dropdown.Menu show className="App">{ this.renderSubMenu(data) }</Dropdown.Menu>
 		</div>
 		
     	
      );
 }
}

export default App;

