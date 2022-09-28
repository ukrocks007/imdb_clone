import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
function MoviesCarousel() {
    return (
        <div className="d-block w-25 center mx-auto">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://camo.githubusercontent.com/23f03e9c827732e036355b8af5c59b94793ad6cad6fb7f49ff151686fbfdb173/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f4d2f4d5635424d5463324d5451334d4441314e6c35424d6c3542616e426e586b46745a5467774f4441334f5449344e6a45402e5f56315f55583138325f4352302c302c3138322c3236385f414c5f2e6a7067"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://camo.githubusercontent.com/0c9040db3bc018d1f649dd7cad2e1cd6363a3b850a99d3bc49f969be06d9d9b9/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f4d2f4d5635424e7a517a4f546b334f5441744e4451305a6930305a54566b4c5749304d5445744d446c6c5a6a4e6b597a4e6a4e5463344c326c745957646c586b4579586b467163476465515856794e6a55304f5451304f5459402e5f56315f55583138325f4352302c302c3138322c3236385f414c5f2e6a7067"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://camo.githubusercontent.com/b6b0dd1b81fddc18a8c429b98dd8db1a85a3d1a960bfb5d62468396c842370cb/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f4d2f4d5635424f544d794d6a45794e7a497a4d5635424d6c3542616e426e586b46745a5467774e7a49794e6a55304e7a45402e5f56315f55583138325f4352302c302c3138322c3236385f414c5f2e6a7067"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default MoviesCarousel;