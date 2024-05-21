import React from 'react'
import { Carousel } from 'react-bootstrap';

function Slidebar(props) {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={props.img1} className="d-block w-100" alt="First slide" style={{ maxHeight: '500px' }} />
                    <Carousel.Caption className='mb-5'>
                        <h5 className='sliderHeading mb-5'>Let's Create a Legancy for Future</h5>
                        <a href='' className='linkbtn my-4'>View More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={props.img1} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
                    <Carousel.Caption className='mb-5'>
                        <h5 className='sliderHeading mb-5 '>Let's Create a Legancy for Future</h5>
                        <a href='' className='linkbtn my-4'>View More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={props.img1} className="d-block w-100" alt="Second slide" style={{ maxHeight: '500px' }} />
                    <Carousel.Caption className='mb-5'>
                        <h5 className='sliderHeading mb-5'>Let's Create a Legancy for Future</h5>
                        <a href='' className='linkbtn my-4'>View More</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slidebar