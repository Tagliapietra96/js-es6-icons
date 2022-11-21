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
});