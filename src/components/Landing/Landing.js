import MoviesCarousel from '../Carousel/Carousel';
import './Landing.css';

function Landing() {
    return (
        <>
            <div className="margins"></div>
            <div className="movieCarousel">
            <MoviesCarousel />
            </div>
            <div className="margins"></div>
        </>
    );
}

export default Landing;