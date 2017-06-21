import React from 'react';
import { connect } from 'react-redux';

import Nav from '../layouts/Nav';
import Footer from '../layouts/Footer';
import SignUpForm from './SignUpForm';

const styleHeader = {
	'background': "url('http://lorempixel.com/1920/640/business/')",
	'backgroundSize': 'cover',
	'backgroundPosition': 'center center'
}


const Home = (history) => {
	return (

			<div>
				<Nav />
				<header className="container-fluid" style={styleHeader}>
	        <div className="row">
	            <div className="container">
	                <div className="row">
	                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 slide-home">
	                        <div className="slide-title">
	                            <h1>MAS DE 100 CURSOS GRATUITOS<br /><span>CON CERTIFICACIÓN OFICIAL</span></h1>
	                            <a href="" className="btn btn-light">VER CURSOS</a>
	                        </div>
	                    </div>
	                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 slide-home">
												<SignUpForm  history={history.history}/>
	                    </div>
	                </div>
	            </div>
	        </div>
		    </header>

				<section className="container">
		        <div className="row">
		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center home-container-titulo">
		                <h2>CURSOS DISPONIBLES</h2>
		                <h4>Cursos sobre lenguaje y oratoria</h4>
		                <hr />
		            </div>
		        </div>
		        <div className="row">
		            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		                <div className="item_box">
		                    <div className="pic">
		                    <a href="detalle-curso.php">
		                        <figure><img src="http://lorempixel.com/640/480/business/" className="img-responsive" alt="" /></figure>
		                        <div className="hover-effect">
		                            <i className="fa fa-play-circle-o" aria-hidden="true"></i>
		                        </div>
		                    </a>
		                    <div className="iconolink">
		                        <span className="heart">
		                            <i className="fa fa-heart-o" aria-hidden="true"></i>
		                        </span>
		                    </div>
		                    <div className="price"><span className="amount">$1200</span></div>
		                    </div>
		                    <div className="mini-descrip">
		                        <div className="entry-title">
		                            <a href="detalle-curso.php">
		                                <h3>Introduccion al Lenguaje Humano</h3>
		                            </a>
		                        </div>
		                        <div className="entry-data">
		                            <label><i className="fa fa-clock-o" aria-hidden="true"></i> 46 horas</label>
		                            <label><i className="fa fa-user" aria-hidden="true"></i> Sebastian Olivera</label>
		                        </div>
		                        <p className="entry-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the book.</p>
		                    </div>
		                    <div className="proof text-center">
		                        <a href="detalle-curso.php" className="btn btn-primary">COMPRAR CURSO</a>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>

        <Footer />
			</div>

	);
}



const mapStateToProps = state => {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Home);
