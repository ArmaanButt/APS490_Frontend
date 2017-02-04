import React from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  PageHeader,
} from 'react-bootstrap';


class Signin extends React.Component {
  static logIn(credentials) {
    // TODO: do a fetch and log in
    console.log(credentials);
  }

  constructor(props) {
    super(props);
    this.state = {
      formHorizontalUserId: '',
      formHorizontalPassword: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.logIn({
      userId: this.state.formHorizontalUserId,
      password: this.state.formHorizontalPassword,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader>Sign in</PageHeader>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalUserId">
            <ControlLabel>User Id</ControlLabel>
            <FormControl
              type="text"
              placeholder="User Id"
              value={this.state.formHorizontalUserId}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.formHorizontalPassword}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Button type="submit">
              Sign in
            </Button>
            <Button bsStyle="primary" onClick={this.props.toggle}>Sign Up</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

Signin.propTypes = {
  toggle: React.PropTypes.func.isRequired,
};

export default Signin;
