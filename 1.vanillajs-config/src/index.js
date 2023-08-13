import './index.css';
import pickImg from '../public/picka.jpeg'
import data from '../public/data.json'

const sum = (a, b) => a + b;
console.log(sum(1, 2));

async function delay() {
    return await Promise.resolve(123);
}

delay().then(console.log);

const img = document.createElement('img');
img.src = pickImg;
document.body.appendChild(img);

console.log(data)

const map = new Map();
map.set('name','KK')
console.log(map)