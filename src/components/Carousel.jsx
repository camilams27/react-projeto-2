import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Carousel.css'

export default function Exibir() {
  const images = [
    {
      original: 'https://scontent.frec15-1.fna.fbcdn.net/v/t1.18169-9/68988_331285600325817_2124465730_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGFN447nVPwc7kx8VFvhVgvBkOejhxJqp8GQ56OHEmqn6aPxHnQEU8wlXN3WhrikQBgKi4fM9Y2YB9_uJimcCKY&_nc_ohc=8cOo5C9R8qQAX_dmXBx&_nc_ht=scontent.frec15-1.fna&oh=4cbae5a0f2de72f1a10e70dafa966624&oe=61995962',
      thumbnail: 'https://scontent.frec15-1.fna.fbcdn.net/v/t1.18169-9/68988_331285600325817_2124465730_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGFN447nVPwc7kx8VFvhVgvBkOejhxJqp8GQ56OHEmqn6aPxHnQEU8wlXN3WhrikQBgKi4fM9Y2YB9_uJimcCKY&_nc_ohc=8cOo5C9R8qQAX_dmXBx&_nc_ht=scontent.frec15-1.fna&oh=4cbae5a0f2de72f1a10e70dafa966624&oe=61995962'
    },
    {
      original: 'https://scontent.frec15-1.fna.fbcdn.net/v/t31.18172-8/891875_355170587937318_781242799_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeElx9uNIww6xyj6pAO6Dd0AV7-OvQmhzLtXv469CaHMuyVL9tTABsJtKChEAxJ4hdSq6EV9Ne7nV43UKkcFfcGJ&_nc_ohc=QQWCsyXPbIQAX8RdWrC&_nc_ht=scontent.frec15-1.fna&oh=14fcbe65121b6bda524b14aa90dbf587&oe=61995FBE',
      thumbnail: 'https://scontent.frec15-1.fna.fbcdn.net/v/t31.18172-8/891875_355170587937318_781242799_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeElx9uNIww6xyj6pAO6Dd0AV7-OvQmhzLtXv469CaHMuyVL9tTABsJtKChEAxJ4hdSq6EV9Ne7nV43UKkcFfcGJ&_nc_ohc=QQWCsyXPbIQAX8RdWrC&_nc_ht=scontent.frec15-1.fna&oh=14fcbe65121b6bda524b14aa90dbf587&oe=61995FBE'
    },
    {
      original: 'https://scontent.frec15-1.fna.fbcdn.net/v/t31.18172-8/913822_367784263342617_1772851441_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeFjNOgGjaQWwMlHC2N669EWHXh8COvRXbwdeHwI69FdvGvUiGkXJCzQ4IqM9ukKSCEO8VufryBbZ7YqaRlpKn5O&_nc_ohc=92kbQPq-E80AX-an8EI&_nc_ht=scontent.frec15-1.fna&oh=e2cfb19b6e4a9ef74fff9f749ed6025a&oe=6199246C',
      thumbnail: 'https://scontent.frec15-1.fna.fbcdn.net/v/t31.18172-8/913822_367784263342617_1772851441_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeFjNOgGjaQWwMlHC2N669EWHXh8COvRXbwdeHwI69FdvGvUiGkXJCzQ4IqM9ukKSCEO8VufryBbZ7YqaRlpKn5O&_nc_ohc=92kbQPq-E80AX-an8EI&_nc_ht=scontent.frec15-1.fna&oh=e2cfb19b6e4a9ef74fff9f749ed6025a&oe=6199246C'
    },
  ];

  function MyGallery(){
    return (
      <div>
        <ImageGallery items={images} />
      </div>
    );
  }
  
  return (
    <MyGallery />
  );
}

