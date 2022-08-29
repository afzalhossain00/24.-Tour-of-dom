// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const addNewPlaces = document.createElement('li');
// 3.added item inner content
addNewPlaces.innerText = 'Jaflong';

// 4. add the child
placesList.appendChild(addNewPlaces);


const newPlace2 = document.createElement('li');
newPlace2.innerText = 'Sundarban';
placesList.appendChild(newPlace2);


// 1. where to add
const mainContainer = document.getElementById('main-container');
// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = 'biriyani';
ul.appendChild(li);
const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'biriyani';
ul.appendChild(li2);
section.appendChild(ul);

mainContainer.appendChild(section);



// set innerHTML
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My dress secletion</h1>
    <ul>
    <li>T-shirt</li>
    <li>Pant</li>
    <li>Lungi</li>
    </ul>
    `
mainContainer.appendChild(sectionDress)
