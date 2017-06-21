import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ auth }) => {
	return (

		<section className="container-fluid" id="footer">
		    <div className="row">
		        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center footer">

		        </div>
		    </div>
		</section>

	);
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Footer);
