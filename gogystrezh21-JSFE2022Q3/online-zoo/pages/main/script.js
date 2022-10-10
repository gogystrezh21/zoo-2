let nav = document.querySelector('.nav');
let btn = document.querySelector('.hamburger-menu');
let body = document.querySelector('.container-full')
let logo = document.querySelector('.logo')
let fakelogo = document.querySelector('.fakelogo')


btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('close');
    body.classList.toggle('close');
    logo.classList.toggle('close');
    fakelogo.classList.toggle('close');
});

let navOpen = document.querySelectorAll( '.nav.open');
let btnClose=document.querySelector('.hamburger-menu.close');
let open= document.querySelector('.open')
 
nav.addEventListener( 'click', (e) => {
    let navOpen = document.querySelector( 'nav');
	if ( e.target==navOpen ) {  
        nav.classList.toggle('open');
        btn.classList.toggle('close');
        body.classList.toggle('close');
        logo.classList.toggle('close');
        fakelogo.classList.toggle('close');
        console.log("e")
    }	
})

// 
 
const data = [
  {
  name: "GIANT PANDAS",
  location: 'Native to Southwest China',
  img: '../../assets/images/pandas.png',
  meal: "../../assets/icons/herbivore.png"},
  {name: "EAGLES",
   location: 'Native to South America',
  img: '../../assets/images/Eagle.png',
  meal: "../../assets/icons/predator.png"},
  {name: "GORILLAS",
   location: 'Native to Congo',
  img: '../../assets/images/gorilla.png',
  meal: "../../assets/icons/herbivore.png"},
  {name: "TWO-TOED SLOTH",
   location: 'Mesoamerica, South America',
  img: '../../assets/images/sloth.png',
  meal: "../../assets/icons/herbivore.png"},
  {name: "CHEETAHS",
   location: 'Native to Africa',
  img: '../../assets/images/cheetahs.png',
  meal: "../../assets/icons/predator.png"},
  {name: "PENGUINS",
   location: 'Native to Antarctica',
  img: '../../assets/images/penguins.png',
  meal: "../../assets/icons/predator.png"},
  {name: "FOX",
   location: 'all of Europe',
  img: '../../assets/images/fox.jpg',
  meal: "../../assets/icons/predator.png"},
  {name: "PRZEWALSKI HORSE",
   location: 'western Mongolia',
  img: '../../assets/images/horse_prj.jpg',
  meal: "../../assets/icons/herbivore.png"},
  {name: "HYENA",
   location: 'Native to Africa',
  img: '../../assets/images/hyena.jpg',
  meal: "../../assets/icons/predator.png"},
  {name: "JERBOA",
   location: 'Asia west',
  img: '../../assets/images/jerboa.jpg',
  meal: "../../assets/icons/herbivore.png"},
  {name: "KENGURU",
   location: 'Native to Australia',
  img: '../../assets/images/kenguru.jpg',
  meal: "../../assets/icons/herbivore.png"},
  {name: "OWL",
   location: 'Native to Europe',
  img: '../../assets/images/owl.jpg',
  meal: "../../assets/icons/predator.png"},
  {name: "PUMA",
   location: 'Native to America',
  img: '../../assets/images/puma.jpg',
  meal: "../../assets/icons/predator.png"},
  {name: "ZUBR",
   location: 'Native to Eastern Europe',
  img: '../../assets/images/zubr.jpg',
  meal: "../../assets/icons/herbivore.png"},
  {name: "WOLF",
   location: 'Native to Europe',
  img: '../../assets/images/wolf.jpg',
  meal: "../../assets/icons/predator.png",
  name: "ZEBRA",
   location: 'Native to Africa',
  img: '../../assets/images/Zebra.jpg',
  meal: "../../assets/icons/herbivore.png",
  name: "GIRAFFE",
   location: 'Native to Africa',
  img: '../../assets/images/giraffe.jpg',
  meal: "../../assets/icons/herbivore.png",
  name: "SNAKE",
   location: 'Native to Africa',
  img: '../../assets/images/snake.jpg',
  meal: "../../assets/icons/predator.png",
}
];

class PetCard {
  constructor({
    name,
    location,
    img,
    meal
  }) {
    this.name = name;
    this.img = img;
    this.meal = meal;
    this.location = location;
  }

  //// Card generator
  generateCard() {
    let template = "";
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-name", this.name);

    template += `<img src=${this.img} alt=${this.name} class="card-img">
                <div class="card-info">
                <div class="card-text">
                  <p class="big_p">${this.name}</p>
                  <p class="small_p">${this.location}</p>
                </div>
                <img class="card-svg" alt=${this.meal} src=${this.meal}>
                </div>
                `;
    card.innerHTML = template;
    return card;
  }
}

const activeSlideBlock = document.querySelectorAll(".cards")[0];

const renderCenterPetCardsToDom = () => {
  const cardContainer = getCenterCardContainer();
  const randomData = getRandomDataArray();
  generatePetCards(randomData).forEach((card) => {
    cardContainer.append(card.generateCard());
  });
};

const getCenterCardContainer = () => {
  const container = activeSlideBlock;
  container.innerHTML = "";
  return container;
};

// рендер скрытых слайдов справа и слева
const prevSlideBlock = document.querySelector(
  ".slider-items-wrapper"
).firstElementChild;
const nextSlideBlock = document.querySelector(
  ".slider-items-wrapper"
).lastElementChild;

const renderNextPetCardsToDom = () => {
  const cardContainers = getCardContainers();
  const randomData = getRandomDataArray();
  cardContainers.forEach((cardContainer) => {
    generatePetCards(randomData).forEach((card) => {
      cardContainer.append(card.generateCard());
    });
  });
};

const getCardContainers = () => {
  const containers = [prevSlideBlock, nextSlideBlock];
  containers.forEach((container) => (container.innerHTML = ""));
  return containers;
};

/// общие функции для рендера в слайдер
const generatePetCards = (data) => {
  let cards = [];
  data.forEach((card) => {
    cards.push(new PetCard(card));
  });
  return cards;
};


window.onload = function () {
  sliderClickHandler();
  renderCenterPetCardsToDom();
  renderNextPetCardsToDom();
};

/// Random Pet Card

const countElements = 6;

let previosArrayOfNumbers = [0, 1, 2, 3, 4, 5];

const randomInteger = () => {
  const rand = Math.random() * 18;
  return Math.floor(rand);
};

const getRandomArrayOfNumbers = () => {
  const randomArrayOfNumbers = [];

  while (randomArrayOfNumbers.length < countElements) {
    let randomNumber = randomInteger();
    if (!randomArrayOfNumbers.includes(randomNumber)) {
      randomArrayOfNumbers.push(randomNumber);
    }
  }
  return randomArrayOfNumbers;
};

const getCurrentArrayOfNumbers = () => {
  let currentArrayOfNumbers = getRandomArrayOfNumbers();
  while (
    [...new Set(previosArrayOfNumbers.concat(currentArrayOfNumbers))].length !==
    1 * countElements
  ) {
    currentArrayOfNumbers = getRandomArrayOfNumbers();
  }
  previosArrayOfNumbers = currentArrayOfNumbers;
  return currentArrayOfNumbers;
};

const getRandomDataArray = () => {
  let currentArrayOfNumbers = getCurrentArrayOfNumbers();
  const randomDataArray = [];
  currentArrayOfNumbers.forEach((i) => randomDataArray.push(data[i]));
  return randomDataArray;
};

const carousel = document.querySelector(".slider-items-wrapper");
  
  const sliderClickHandler = () => {
    const slider = document.querySelector(".slider");
    slider.addEventListener("click", (e) => {
      let clickedItem = e.target;
      if (clickedItem.classList.contains("arrow-right")) {
        carousel.classList.add("transition-right");
      } else if (clickedItem.classList.contains("arrow-left")) {
        carousel.classList.add("transition-left");
      }
    });
  };
  
  const changeSliderContent = () => {
    activeSlideBlock.innerHTML = prevSlideBlock.innerHTML
    renderNextPetCardsToDom()
  }
  
  carousel.addEventListener("animationend", () => {
    carousel.classList.remove("transition-right");
    carousel.classList.remove("transition-left");
    changeSliderContent()
  });




