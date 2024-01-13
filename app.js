// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}



// Trial 2 - Setup event listener for the cheese button


// Trial 2 - Setup event listener for the tomatoes button


// Trial 2 - Setup event listener for the onion button


// Trial 2 - Setup event listener for the lettuce button


//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients


function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


// Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  for (let ingredient in state) {
    const buttonClass = `.btn-${ingredient.toLowerCase()}`;
    const button = document.querySelector(buttonClass);

    if (state[ingredient]) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }
}

// Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  const ingredientsBoard = document.querySelector('.menu-container');
  for (let ingredient in state) {
    const ingredientElement = ingredientsBoard.querySelector(`p.items-${ingredient}`);

    if (state[ingredient]) {
      ingredientElement.style.display = 'block';
    } else {
      ingredientElement.style.display = 'none';
    }
  }
}

// Judgement 1 - Calculate and render the total price based on ingredients
function renderPrice() {
  let totalPrice = wholeWheatBun + 150; // Initial price of the burger

  for (let ingredient in state) {
    if (!state[ingredient]) {
      totalPrice -= ingredients[ingredient];
      console.log(totalPrice);
    }
  }

  const priceDetails = document.querySelector('.price-details');
  priceDetails.textContent = `INR ${totalPrice}`;
  console.log(priceDetails)
}
