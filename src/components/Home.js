import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://media.beautyplaza.com/data/hbb24/width1384/254473.jpg'
        alt='...'
      >
        <h1 > BOXING DAY IS COMING UP TO 80% OFF</h1>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://img.freepik.com/free-photo/beautiful-face-young-woman-with-maroon-makeup-portrait-gorgeous-girl-with-vinous-lips_186202-7456.jpg?w=2000'
        alt='...'
      >
        <h1>HOLIDAY READY 3 FOR 25.99$</h1>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://media.ourfashionpassion.com/wp-content/uploads/2022/09/29073147/cheap-makeup-brands.jpg'
        alt='...'
      >
        <h1>BUY 2 GET 60% OFF</h1>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}