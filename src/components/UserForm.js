import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';


class UserForm extends Component {
    state = {
        step: 1,
        firstname:'',
        lastname:'',
        email:'',
        occupation:'',
        city:'',
        bio: ''
    }

    //proceed to next step
    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step: step + 1
        })
    }
    //Go Back
    prevStep=()=>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Handle fields changes *
    handleChange =input =>e =>{
        this.setState({
            [input]:e.target.value
        })
    }
    render() {
        const {step}=this.state;
        const {firstname,lastname,email,occupation,city,bio}=this.state;
        const values = {firstname,lastname,email,occupation,city,bio}

        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                    handleChange={this.handleChange}    
                    nextStep={this.nextStep} 
                    values={values}  
                    />
                )
            case 2:
                return <FormPersonalDetails
                    handleChange={this.handleChange}   
                    nextStep={this.nextStep}  
                    prevStep={this.prevStep} 
                    values={values} 
                        />
            case 3:
                return (<Confirm
                    nextStep={this.nextStep}  
                    prevStep={this.prevStep} 
                    values={values} 
                        />)
            case 4:
                return  <h1>Success</h1>
            default:
                return<h1>Error;</h1>                    
        }
    }
}

export default UserForm
