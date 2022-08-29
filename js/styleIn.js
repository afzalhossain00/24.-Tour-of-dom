const sections = document.querySelectorAll('section');
for (const section of sections) {
    // console.log(section);
    section.style.border = '2px solid tomato';
    section.style.borderRadius = '5px';
    section.style.marginBottom = '20px';
    section.style.paddingLeft = '20px';
    section.style.backgroundColor = 'lightgray';
}

// const placeContainer = document.getElementById('places-container');
// placeContainer.style.backgroundColor = 'yellow'

const placeContainer = document.getElementById('places-container');
placeContainer.classList.add('text-center');
placeContainer.classList.remove('large-text');