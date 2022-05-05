import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List';

class Confirm extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep(); 
    }

    render() {
        const {values}= this.props;
        return (
            <div>
            <MuiThemeProvider>
                {/* <React.Fragment> */}
                <AppBar title='Confirm' />
                <List>
                    <ListItem
                    primaryText="first name"
                    secondaryText = {values.firstname}
                    />
                    <ListItem
                    primaryText="last name"
                    secondaryText = {values.lastname}
                    />
                    <ListItem
                    primaryText="email"
                    secondaryText = {values.email}
                    />
                     <ListItem
                    primaryText="occupation"
                    secondaryText = {values.occupation}
                    />
                    <ListItem
                    primaryText="city"
                    secondaryText = {values.city}
                    />
                   
                    <ListItem
                    primaryText="bio"
                    secondaryText = {values.bio}
                    />
                </List>   
            <RaisedButton 
                
                label="Back"
                primary={false}
                style={styles.button}  
                onClick={this.back}    
            />    
            </MuiThemeProvider>
            </div>
        )
    }
}
const styles = {
    button:{margin:'15px'}
}


export default Confirm;

