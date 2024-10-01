import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations In India!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Tajmahal of AGRA ,One of the seven Wonders'
              label='Wonder'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Varanasi ,The City Of Mahakal'
              label='Mystery'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='A small state in the eastern Himalayas, bordered by China, Bhutan, Nepal, and West Bengal'
              label='Hill-station'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text=' "The Golden city" Jaisalmer, Rajasthan'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHIMLA ,Charming destination in Himachal'
              label='Destination'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;