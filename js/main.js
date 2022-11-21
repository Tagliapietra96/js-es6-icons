/**
 * Funzione uguale a document.querySelector() ma riassunta in meno caratteri
 * @param {string} querySelector Indica un selettore css valido
 * @returns 
 */
function el(querySelector) {
    let domElement;
    if (querySelector === ':root' || querySelector === 'root') {
        domElement = document.documentElement;
    } else {
        domElement = document.querySelector(querySelector);
    };
    return domElement;
};

/**
 * Funzione che crea automaticamente un elemento HTML specificandolo
 * tramite l'argomento 'type'.
 * Possiamo anche specificare da 1 a 3 classi aggiuntive di 
 * qualsiasi genere
 * @param {string} type tipo di tag da creare
 * @param {string} class1 classe aggiuntiva
 * @param {string} class2 classe aggiuntiva
 * @param {string} class3 classe aggiuntiva
 * @returns 
 */
function elGenerator(type, class1, class2, class3) {
    let newElement = document.createElement(type);

    if (class3 !== undefined) {
        newElement.classList.add(class3);
    };

    if (class2 !== undefined) {
        newElement.classList.add(class2);
    };

    if (class1 !== undefined) {
        newElement.classList.add(class1);
    };

    return newElement;
};

/**
 * Genera un numero random compreso o uguale a min e max, 
 * se i valori non vengono specificati il generatore darà come output o 1 o 0
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function randomNum(min, max) {
    if (min === undefined && max === undefined) {
        min = 0;
        max = 1;
    };
    if (min < max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (min - max + 1)) + max;
    };
};

/**
 * funzione che genera in maniera randomica un colore in codice hex 
 * @returns {string}
 */
function randomHexColor() {
    let colorRange = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let finalColor = ['#'];

    for (i = 0; i < 6; i++){
        finalColor.push(colorRange[randomNum(0, 15)]);
    };
    return finalColor.join('');
}


el(':root').style.setProperty('--orange', randomHexColor());
el(':root').style.setProperty('--blue', randomHexColor());
el(':root').style.setProperty('--green', randomHexColor());






const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

const types = [];

icons.forEach((element, i) => {
    let colEl = elGenerator('div', 'col', `${element.type}`);
    let cardEl = elGenerator('div', 'my-card');
    let iconEl = elGenerator('i', `${element.family}`, `${element.prefix}${element.name}`, `${element.color}`);
    let nameEl = elGenerator('p', 'fs-3', 'pt-3');
    nameEl.innerHTML = `${element.name.toUpperCase()}`;

    cardEl.append(iconEl, nameEl);
    colEl.append(cardEl);
    el('.row-cols-5').append(colEl);

    if (!types.includes(element.type)) {
        types.push(element.type);
    }
});

types.forEach((element) => {
    let optionEl = elGenerator('option');
    optionEl.value = element;
    optionEl.innerHTML = element;
    el('select').append(optionEl);
});

let cardList = document.querySelectorAll('.row-cols-5 .col');

el('select').addEventListener('change', function () {
    if (this.value === 'all') {
        cardList.forEach((element) => {
            element.classList.remove('d-none');
        });
    } else {
        cardList.forEach((element) => {
            if (element.classList.contains(this.value)) {
                element.classList.remove('d-none');
            } else {
                element.classList.add('d-none');
            }
        });
    }

});

