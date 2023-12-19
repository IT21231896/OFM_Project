//Front-End devolopment

//React Js import- Cuz this is Front end/Componet so we use to devolop this side used by React JS
import React, {Component} from "react";
//we used here "Form "section so, we need import Form
import Form from 'react-bootstrap/Form';
//we used butten in bottem of form so we need to import button also
import Button from 'react-bootstrap/Button';

//note - we used "Axios library" to handle the request by using 'HTTP' ,that requests get from frond-end(react /react js) so,we need to import
import axios from 'axios';



//Export - used to export output for Drond-End 
export default class CreateCustomer extends Component {

    //State for form - basic structure of frond-end form creation
    //state - Constructor Structure
    //we use this state constructure for all react.js components.
    constructor(props){
        super(props)

        //state sturcture //this used by form.control used in- value="" //state is used to save the data temporeely when user Entering data.
        //state used by back-end code for store the data to server //in hare used by onsubmit methode below "onsubmitBtn"
        this.state = {
            name: '',
            email: '',
            custid: '',
            mobileno: '',
            username: '',
            password: '',
            re_password: ''
        }
    }

    //methods
    //method for Form.contol -that we used in onChange="" event

    //we use "setState" key word(pre build methode) to handle the state(access the state to store the datas)
    //methode for Name
    onChangeCustName = (event) => { //when user enter evry single charecter on (front-end)text box ,that every single time this method was called and set the(Enterd data) to state variable -name
        console.log(event.target.value)
        this.setState({name: event.target.value}) //modify the state value using "setState" key word
    }


    //methode for Email
    onChangeCustEmail = (event) => { //methode for state variable -email
        console.log(event.target.value)
        this.setState({email: event.target.value}) //modify the state value using "setState" key word
    }

    //methode for Customer ID
    onChangeCustID = (event) => { //methode for state variable -email
        console.log(event.target.value)
        this.setState({custid: event.target.value}) //modify the state value using "setState" key word
    }

    //for moble no
    onChangeMobileNo = (event) => {
        console.log(event.target.value)
        this.setState({mobileno: event.target.value})
    }

    //username
    onChangeUserName = (event) => {
        console.log(event.target.value)
        this.setState({username: event.target.value})
    }

    //password
    onChangePassword = (event) => {
        console.log(event.target.value)
        this.setState({password: event.target.value})
    }

    onChangRePassword = (event) => {
        console.log(event.target.value)
        this.setState({re_password: event.target.value})
    }
    



    //methode for Submit Button -name= onSubmitBtn()
    onSubmitBtn = (event) => {
        event.preventDefault();
        console.log("I am Working")
        alert("Form Submitted")
    
        const custObject = {
            name: this.state.name ,
            email: this.state.email ,
            custid: this.state.custid ,
            mobileno: this.state.mobileno,
            username: this.state.username ,
            password: this.state.password ,
            re_password: this.state.re_password 
        }
    
        axios.post('http://localhost:8000/cust/create-customer', custObject)
        .then(res => console.log(res.data))
    
        this.setState({
            name: '' ,
            email: '' ,
            custid: '' ,
            mobileno: '',
            username: '',
            password: '' ,
            re_password: ''
        })
    }
    





    render() {
        return( 

            //Form creation for -Create Customer Component.
            //"onSubmit={}" key word used for what happed/what methode call after press the submit button.
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmitBtn}>  

                <p className="centered-paragraph">Create New Customer</p>

                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeCustName} placeholder="Enter Your Name" required/>
                    </Form.Group>

                    <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeCustEmail} placeholder="Enter Your Email" required/>
                    </Form.Group>

                    <Form.Group controlId="CustID">
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control type="text" value={this.state.custid} onChange={this.onChangeCustID} placeholder="Enter Your Customer ID" required/>
                    </Form.Group>

                    <Form.Group controlId="Phone">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type="text" value={this.state.mobileno} onChange={this.onChangeMobileNo} placeholder="Enter Your Mobile Number" required/>
                    </Form.Group>

                    <Form.Group controlId="UserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" value={this.state.username} onChange={this.onChangeUserName} placeholder="Enter Your User Name" required/>
                    </Form.Group>

                    <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Enter Your Password" required/>
                    </Form.Group>

                    <Form.Group controlId="RePassword">
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control type="password" value={this.state.re_password} onChange={this.onChangRePassword} placeholder="Re-Enter Your Password" required/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" className="submit-button" type="submit">
                        Create New Account
                    </Button>
                </Form>
            </div>
        )
    }
}