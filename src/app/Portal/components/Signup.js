import React from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  PageHeader,
} from 'react-bootstrap';


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signupUserId: '',
      signupPassword1: '',
      signupPassword2: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  getValidationState() {
    if (this.state.signupPassword2 && this.state.signupPassword1 === this.state.signupPassword2) {
      return 'success';
    }
    return 'error';
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: POST data
    console.log(this.state.signupUserId);
    console.log(this.state.signupPassword2);
  }

  render() {
    return (
      <div>
        <PageHeader>Create your account</PageHeader>

        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="signupUserId">
            <ControlLabel>Choose your User id</ControlLabel>
            <FormControl
              type="text"
              placeholder="User id"
              value={this.state.signupUserId}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="signupPassword1">
            <ControlLabel>Create a password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.signupPassword1}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup
            controlId="signupPassword2"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Confirm your password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.signupPassword2}
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <Button bsStyle="primary" type="submit">Sign Up</Button>
            <Button onClick={this.props.toggle}>Sign in</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

Signup.propTypes = {
  toggle: React.PropTypes.func.isRequired,
};

export default Signup;
