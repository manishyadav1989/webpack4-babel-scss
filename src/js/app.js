import './../css/main.scss';
import { RandomGenerator } from './random-generator';

const buttonRandomInt = document.querySelector('#randomInt'),
    buttonRandomRange = document.querySelector('#randomRange'),
    output = document.querySelector('#output');

const outputRandomInt = () =>{
    output.textContent = RandomGenerator.randomInteger();
}

const outputRandomRange = () =>{
    output.textContent = RandomGenerator.randomRange(1, 500);
}

buttonRandomInt.addEventListener('click', outputRandomInt);
buttonRandomRange.addEventListener('click', outputRandomRange);