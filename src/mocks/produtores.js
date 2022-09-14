import Green from '../assets/produtores/green.png';
import Grow from '../assets/produtores/grow.png';
import JennyJack from '../assets/produtores/jenny-jack.png';
import Potager from '../assets/produtores/potager.png';
import Salad from '../assets/produtores/salad.png';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const produtores = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: Green,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
    {
      name: 'Grow',
      image: Grow,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
    {
      name: 'Jenny Jack',
      image: JennyJack,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
    {
      name: 'Potager',
      image: Potager,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
    {
      name: 'Salad',
      image: Salad,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
  ],
};
