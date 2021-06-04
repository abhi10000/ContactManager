import React, { Component } from 'react';

 class AddContact extends Component {
  constructor(props){
      super(props);
      this.nameInput=React.createRef();
      this.emailInput=React.createRef();
      this.phoneInput=React.createRef();
  }
   onSubmit=(e)=>{e.preventDefault();
    const contact={
name:this.nameInput.current.value,
email:this.emailInput.current.value,
phone:this.phoneInput.current.value
    }
    console.log(contact);
};

    static defaultProps={
        name:'Raman Singh',
        email:'raman@gmail.com',
        phone:'777-333-444'
    }
   
    render() {
        const {name,email,phone}=this.props;
        return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name"
                          className="form-control form-control-lg"
                          placeholder="Enter Name..."
                         
                          defaultValue={name}
                          />
                          </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" name="email"
                          className="form-control form-control-lg"
                          placeholder="Enter Email..."
                         
                          defaultValue={email}
                          />  </div>
                      <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input type="text" name="phone"
                          className="form-control form-control-lg"
                          placeholder="Enter Phone..."
                          
                          defaultValue={phone}
                          />   
                          </div>
                          <input type="Submit" value="Add Contact" className="btn btn-block * bt-light" />  
                  </form>
            </div>
            </div>
        );
     }
 }
export default AddContact;