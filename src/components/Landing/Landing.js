import MoviesCarousel from '../Carousel/Carousel';
import './Landing.css';
import LandingTextLabel from '../LandingTextLabel/LandingTextLabel';
const text = ['Reviews', 'Listings', 'All your favourite movies', 'At one place', 'Welcome To IMDb'];
function Landing() {
    return (
        <>
            <div className="movieCarousel">
                <MoviesCarousel />
            </div>
            { text.map((t) => (
                <LandingTextLabel text={ t } />
            )) }
        </>
    );
}

export default Landing;