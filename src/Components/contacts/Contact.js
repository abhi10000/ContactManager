import React,{Component} from 'react';
import {Consumer} from '../../Context';
import axios from 'axios';
import {Link} from 'react-router-dom';

 class Contact extends Component {
   state={showContactInfo:false};
   onDeleteClick=async(id,dispatch)=>{
     try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
     dispatch({type:'DELETE_CONTACT',payload:id});}
     catch(e){
      dispatch({type:'DELETE_CONTACT',payload:id});
     }
   };
  
    render(){
      const {id,name,email,phone}=this.props.Contact;
      const {showContactInfo}=this.state; 
       
      return (
            <Consumer>
              {value=>{
              const {dispatch} =value;

              return(
            <div className="card card-body mb-3">

             <h4> {name}<i onClick={()=>this.setState({showContactInfo:
      !this.state.showContactInfo}) }  className="fas fa-sort-down" style={{cursor:'Pointer'}} />
      <i className="fas fa-times" style={{cursor:'Pointer',float:'right',color:'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}
      />
      <Link to={`Contact/edit/${id}`}><i className="fas fa-pencil-alt" style={{cursor:'Pointer',float:'right',color:'black',marginRight:'1rem'}}></i></Link>
      </h4>
     
             {showContactInfo?(
             <ul className="list-group">
                 <li className="list-group-item">Email:{email}</li>
                 <li className="list-group-item">Phone:{phone}</li>
                 </ul> 
             ):null}  
            </div>
            
                 );
    }}
    </Consumer>
      )}
      }
        

export default Contact;