import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import './styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(image);
document.body.appendChild(bigImage);
