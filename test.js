const inquirer = require('inquirer');

console.log('Welcome to QuickPizza Ordering System');

const orderQuestions = [
  {
    type: 'confirm',
    name: 'deliveryOption',
    message: 'Would you like your order delivered?',
    default: false,
  },
  {
    type: 'input',
    name: 'contactNumber',
    message: "Please enter your contact number:",
    validate: function(value) {
      const phoneRegex = /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i;
      if (phoneRegex.test(value)) {
        return true;
      }
      return 'Enter a valid phone number, please.';
    },
  },
  {
    type: 'list',
    name: 'pizzaSize',
    message: 'Choose your pizza size:',
    choices: ['Large', 'Medium', 'Small'],
    filter: val => val.toLowerCase(),
  },
  {
    type: 'input',
    name: 'orderQuantity',
    message: 'How many pizzas would you like to order?',
    validate: value => !isNaN(parseFloat(value)) || 'Enter a valid number',
    filter: Number,
  },
  {
    type: 'checkbox',
    name: 'pizzaToppings',
    message: 'Select your toppings:',
    choices: [
      { key: 'p', name: 'Pepperoni and Cheese', value: 'PepperoniCheese' },
      { key: 'a', name: 'All Dressed', value: 'AllDressed' },
      { key: 'w', name: 'Hawaiian', value: 'Hawaiian' },
    ],
  },
  {
    type: 'list',
    name: 'complimentaryDrink',
    message: 'Choose a complimentary 2L beverage:',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'feedback',
    message: 'Any feedback on our service?',
    default: 'Everything is great!',
  },
  {
    type: 'list',
    name: 'feedbackReward',
    message: 'As a thank-you for your feedback, please choose a free item:',
    choices: ['Cake', 'Fries'],
    when: answers => answers.feedback !== 'Everything is great!',
  },
];

inquirer.prompt(orderQuestions).then(answers => {
  console.log('\nYour order summary:');
  console.log(JSON.stringify(answers, null, 2));
});