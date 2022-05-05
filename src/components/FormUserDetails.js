import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const styles1 = {display:'flex',flexDirection:'column',justifyContent:'center'}
        const {values ,handleChange}= this.props;
        return (
        <div >
            <MuiThemeProvider style={styles1}>

                <AppBar title='Enter User Details' />
                <TextField  

                    hintText= 'Enter Your First Name'
                    floatingLabelText='First Name'
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname} />
                <br/>    
                <TextField  

                    hintText= 'Enter Your Last Name'
                    floatingLabelText='Last Name'
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname} />
                <br/>    
                <TextField  
                    hintText= 'Enter Your Email'
                    floatingLabelText='Email'
                    onChange={handleChange('email')}
                    defaultValue={values.email} />
            
            <br/>    
            <RaisedButton 
                label="Continue"
                primary={true}
                style={styles.button}  
                onClick={this.continue}    
            />
              
            </MuiThemeProvider>
        </div>    
           
        )
    }
}
const styles = {
    button:{margin:'15px'}
}

export default FormUserDetails;
