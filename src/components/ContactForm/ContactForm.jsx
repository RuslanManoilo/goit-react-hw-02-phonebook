import { Component } from "react";
import { nanoid } from "nanoid";
import { Form, FormBtn, FormInput, FormLabel } from "./ContactForm.styled";


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    onChangeForm = ({target}) => {
        this.setState({[target.name]: target.value});
    };
    
    getName = (evt) => {
        evt.preventDefault();
      
        this.props.getContact({
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
        });

        this.setState({
            name: '',
            number: ''
        });
    };
    
    render() {
        return (
            <Form 
            onSubmit={this.getName}
            >
                <FormLabel htmlFor="contactFormInput">Name</FormLabel>
                <FormInput 
                    name="name" 
                    id="contactFormInput" 
                    type="text" 
                    required 
                    onChange={this.onChangeForm}
                    value={this.state.name}
                />

                <FormLabel htmlFor="contactFormNumber">Number</FormLabel>
                <FormInput 
                    name="number"
                    id="contactFormNumber" 
                    type="tel" 
                    required
                    onChange={this.onChangeForm}
                    value={this.state.number}
                />
    
                <FormBtn>Add contact</FormBtn>
            </Form>
        )
    }
}


export default ContactForm;