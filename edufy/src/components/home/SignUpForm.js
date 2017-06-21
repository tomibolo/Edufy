import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUserRequest } from '../../actions/usersActions';

class SignUpForm extends Component {

  constructor(props) {
		super(props);
		this.state = {
      name: '',
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
    this.props.setUserRequest({user: this.state})
      .then( () => {
        this.props.history.push('/');
      } )
  };

  render() {
    return (
      <form className="rectangle" onSubmit={this.onSubmit}>
        <legend>REGISTRATE EN UN SOLO PASO!</legend>
        <div className="form-group">
            <input type="text" className="form-control input" name="name" id="nombre" placeholder="Nombre y Apellido"
              value = {this.state.name}
              onChange = {this.onChange}
            />
        </div>
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
        <button type="submit" className="btn btn-primary">COMENZAR</button>
      </form>
    )
  }

}

const mapStateToProps = state => {
  return {
  }
}
SignUpForm.propTypes = {
	setUserRequest: PropTypes.func.isRequired
}

export default connect( mapStateToProps, { setUserRequest } )(SignUpForm);
