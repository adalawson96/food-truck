import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <>
        <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img  src="/backgroundHead.png" className="d-block w-100" alt="Logo"/>
                </div>
                <div className="carousel-item">
                    <img src="/tennisCourt.png" className="d-block w-100" alt="Tennis Court"/>
                </div>
                <div className="carousel-item">
                    <img src="/restuarantHead.png" className="d-block w-100" alt="Restaurant"/>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br />
        {/* Text below */}
        <div className='subHeading'>
            <h3> Restaurant «XXX» is located in the tennis club Break Point <br/> Ericeira, Portugal.</h3><br/>
            <h1>UPCOMING EVENTS</h1><br/>
        </div>

        {/* Upcoming Events Section */}
        <div className="upcoming-events">
            <div className="card1">
                <Link to="/events">{ <img src="/kidCamp.png" alt="Kid Camp"/>}</Link>
                <h3>KIDS CAMP</h3>
                <Link to="/events">{ <button>DETAILS</button> }</Link>
            </div>
            <div className="card2">
            <Link to="/events">{ <img src="/seniorCamp.png" alt="Senior Camp"/>}</Link><br></br>
                <h3>SENIOR CAMP</h3>
                <Link to="/events">{ <button>DETAILS</button> }</Link>
            </div>
            <div className="card2">
            <Link to="/events">{ <img src="/seniorCamp.png" alt="Senior Camp"/>}</Link><br></br>
                <h3>SENIOR CAMP</h3>
                <Link to="/events">{ <button>DETAILS</button> }</Link>
            </div>
        </div>
        {/* Restaurant Section */}
        <div className="restaurant">
            <h1>OUR RESTAURANT</h1>
            {/* <br/> */}
            <h3>Monday-Friday 9-18h. Saturday 10-15h.</h3>
            <h3>Telephone: +34 698 94 54 09</h3>
            {/* <button>Make Reservation</button> */}
            <a className="btn btn-primary" href="/restaurant" role="button">Make Reservation</a>
        </div>
        </>
    )
};