import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import {Consumer} from '../../Context';


class Contacts extends Component {
    
   
    render() {
        return(<Consumer>
            {value=>{
                const {contacts} =value;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2"><span className="text-danger">Contact</span>List</h1>
            {contacts.map(contact=>(
                <Contact
                key={contact.id}
                Contact={contact} 
                
                />
            ))}
            </React.Fragment>
        );
    }}
  </Consumer>  )
}}
Contact.propTypes={
    Contact:PropTypes.object.isRequired,
   
  }; 

export default Contacts;