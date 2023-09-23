//Zadanie1
let headTable = document.getElementById('head-table')
let table = document.createElement('table')
  headTable.append(table)

 let x = 1;
  for(let i = 0;i <= 9;i++) {
      tr = document.createElement('tr')
  
 for(let i = 1;i < 11;i++) {
      td  = document.createElement('td')
      td.innerHTML = `${i*x}(${i} * ${x})`
      tr.append(td)
      table.append(tr)
      
   }
   x++;
}

//Zadanie2
var names = ["Adam", "Ewa", "Jan", "Anna", "Krzysztof", "Małgorzata", "Piotr", "Maria", "Tomasz", "Katarzyna"];
var surnames = ["Kowalski", "Nowak", "Wiśniewski", "Wójcik", "Kowalczyk", "Kaczmarek", "Mazur", "Krawczyk", "Król", "Czarnecki"];

function generatePerson() {
var name = names[Math.floor(Math.random() * names.length)];
var surname = surnames[Math.floor(Math.random() * surnames.length)];
var age = Math.floor(Math.random() * 63) + 18; 
var phone = Math.floor(Math.random() * 3000000) + 5000000; 
return {name: name, surname: surname, age: age, phone: phone};
}

function generateRecords() {
var numRecords = document.getElementById("recordsInput").value;
var tableBody = document.getElementById("recordsTable").getElementsByTagName("tbody")[0];
tableBody.innerHTML = ""; 
	for (var i = 0; i < numRecords; i++) {
	var person = generatePerson();
	var row = tableBody.insertRow(i);
	var nameCell = row.insertCell(0);
	var surnameCell = row.insertCell(1);
	var ageCell = row.insertCell(2);
	var phoneCell = row.insertCell(3);
	nameCell.innerHTML = person.name;
	surnameCell.innerHTML = person.surname;
	ageCell.innerHTML = person.age;
	phoneCell.innerHTML = person.phone;
}
}


//Zadanie3
const name = document.querySelector('.n1');
const surName = document.querySelector('.s2');
const balance = document.querySelector('.b3');
const actions = document.querySelector('.actions');
const enterBankButton = document.querySelector('.enter-bank-button');
const account = [
  {
    'name': 'Afla',
    'surName': 'Rian',
    'balance': 2491,
    'pin': 5235
  },
  {
    'name': 'Volodya',
    'surName': 'Lino',
    'balance': 142,
    'pin': 9237
  },
  {
    'name': 'Mark',
    'surName': 'Bulah',
    'balance': 5324,
    'pin': 9245
  }
];

let account_2;
let checkPin;

function logIn() {
  checkPin = Number(window.prompt('Enter pin from your account'));
  account_2 = account.filter(enteredPin => enteredPin.pin === checkPin);
}

function updateUI() {
  if (account_2.length >= 1) {
    name.innerHTML = account_2[0].name;
    surName.innerHTML = account_2[0].surName;
    balance.innerHTML = account_2[0].balance;
    actions.style.display = 'block';
    enterBankButton.style.display = 'none';
  } else {
    name.innerHTML = 'undefined';
    surName.innerHTML = 'undefined';
    balance.innerHTML = 'undefined';
    actions.style.display = 'none';
    enterBankButton.style.display = 'block';
  }
}

function addMoney() {
  let amount = Number(window.prompt('Enter the amount to add'));
  
  if (!isNaN(amount) && amount > 0) {
    account_2[0].balance += amount;
    balance.innerHTML = account_2[0].balance;
  } else {
    window.alert('Invalid amount. Please enter a valid number.');
  }
}

function withdrawMoney() {
  let amount = Number(window.prompt('Enter the amount to withdraw'));
  
  if (!isNaN(amount) && amount > 0 && amount <= account_2[0].balance) {
    account_2[0].balance -= amount;
    balance.innerHTML = account_2[0].balance;
  } else {
    window.alert('Invalid amount. Please enter a valid number within your balance.');
  }
}

function runCode() {
  logIn();
  updateUI();
  
  setTimeout(addBalance, 5000);
}
