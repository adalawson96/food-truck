// import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="col-1">
                <img src="./logo.png" alt="Logo" />
                </div>
                {/* <!-- INSERT MAP? --> */}
                <div className="col-2">
                <div className="flex-container">
                    <div className="black-rectangle">
                    <h5>Find our location on our instagram story! </h5>
                    </div>
                </div>
                </div>
                <div className="col-3">
                <h3>GET IN TOUCH!</h3>
                <h5>Every Day, 8 AM - 10 PM</h5>
                <h5>011 222 333</h5>
                <div className="social-icons">
                    {/* <i className="fa fa-whatsapp" aria-hidden="true"></i> */}
                    <a href="https://api.whatsapp.com/send?phone= +351910544829" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{<i className="fa fa-whatsapp" aria-hidden="true"></i>}</a>
                    <a href="mailto:hello@breakpointclub.com" style={{ color: 'inherit', textDecoration: 'none' }}>{<i className="fa fa-envelope-o" aria-hidden="true"></i>}</a>
                    <a href="https://www.facebook.com/breakpointericeira" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{<i className="fab fa-facebook"></i>}</a>
                    <a href="https://www.instagram.com/breakpoint.ericeira/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{<i className="fab fa-instagram"></i>}</a>
                </div>
                <h5>©2023, Southern Delite</h5>
                </div>
            </div>
        </footer>
    );
}