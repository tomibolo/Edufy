import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userLoginRequest } from '../../actions/authActions';

class SignInForm extends Component {

  constructor(props) {
		super(props);
		this.state = {
			email : '',
			password: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

  //onChange function
  onChange(e){
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userLoginRequest({user: this.state})
      .then( () => {
        this.props.history.push('/');
      } )
  };

  render() {
    return (
      <form className="rectangle" onSubmit={this.onSubmit}>
        <legend>INGRESA!</legend>
        <div className="form-group">
            <input type="email" className="form-control input" name="email" id="email" placeholder="Email"
              value = {this.state.email}
              onChange = {this.onChange}
            />
        </div>
        <div className="form-group">
            <input type="password" className="form-control input" name="password" id="password" placeholder="Contraseña"
              value = {this.state.password}
              onChange = {this.onChange}
            />
        </div>
        <button type="submit" className="btn btn-primary">INGRESAR</button>
      </form>
    )
  }

}

const mapStateToProps = state => {
  return {
  }
}
SignInForm.propTypes = {
	userLoginRequest: PropTypes.func.isRequired
}

export default connect( mapStateToProps, { userLoginRequest } )(SignInForm);
