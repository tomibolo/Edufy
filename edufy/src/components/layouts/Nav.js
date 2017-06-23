import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown, MenuItem, Modal, Button } from 'react-bootstrap';

import SignInForm from '../home/SignInForm';
import { userLogoutRequest} from '../../actions/authActions';

class Nav extends Component {
	constructor () {
		super()
		this.state = {
			showModal: false
		}
		this.toggleModal = () => {
			this.setState({showModal: !this.state.showModal})
		}

	}

	logout(e) {
		this.props.userLogoutRequest();
		this.toggleModal();
	}

	render () {
		const { isAuthenticated } = this.props.auth;

		return (
				<nav className="navbar navbar-default navbar-static-top">
					<div className="container">
						<div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
		                <span className="sr-only">Toggle Navigation</span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		            </button>
		            <a className="navbar-brand" href="index.php"><img src={require('../assets/img/logo.png')} alt="" /></a>
		        </div>
						<form className="navbar-form navbar-left" role="search">
		            <div className="input-group">
		              <input type="text" className="form-control input" />
		              <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
		            </div>
		        </form>

						<div className="collapse navbar-collapse" id="app-navbar-collapse">
		            <ul className="nav navbar-nav navbar-right">
		                <li className="borde-right"><a href="">CURSOS</a></li>
		                { !isAuthenticated ? <li className="borde-right"><a style={{cursor: 'pointer'}} onClick={() => this.toggleModal()}>INGRESAR</a></li> : '' }
		                { !isAuthenticated ? <li><a href="" className="btn btn-primary">REGISTRATE</a></li> : '' }
										{ isAuthenticated ?
		                <Dropdown id="dropdown-custom-2" className="">
		                    <Dropdown.Toggle href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
		                        <div className="nav-right-icon-user">
		                            <i className="fa fa-user" aria-hidden="true"></i>
		                        </div>
		                    </Dropdown.Toggle>
		                    <Dropdown.Menu className="dropdown-menu navbar-right-dropdown-menu" role="menu">
		                        <MenuItem eventKey="1"><i className="fa fa-user" aria-hidden="true"></i> Mi Perfil</MenuItem>
		                        <MenuItem eventKey="2"><i className="fa fa-folder-o" aria-hidden="true"></i> Mis Cursos</MenuItem>
		                        <MenuItem eventKey="3"><i className="fa fa-heart-o" aria-hidden="true"></i> Mis Favoritos</MenuItem>
		                        <MenuItem eventKey="4"><i className="fa fa-money" aria-hidden="true"></i> Historial de Pago</MenuItem>
		                        <MenuItem eventKey="5" onClick={() => {this.logout()}}><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Logout</MenuItem>
		                    </Dropdown.Menu>
		                </Dropdown>
										: '' }
		            </ul>
		        </div>

					</div>
					<Modal
	          show={ !this.props.auth.isAuthenticated && this.state.showModal }//{this.state.showModal}
	          onHide={() => this.toggleModal()}
	          aria-labelledby="contained-modal-title"
	        >
	          <Modal.Header closeButton>
	            <Modal.Title id="contained-modal-title">Ingresar</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <SignInForm history={ this.props.history }/>
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={ () => this.toggleModal() }>Close</Button>
	          </Modal.Footer>
	        </Modal>
				</nav>
			);
	}
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
}

Nav.propTypes = {
  userLogoutRequest: PropTypes.func.isRequired
}


export default connect(mapStateToProps, { userLogoutRequest })(Nav);
