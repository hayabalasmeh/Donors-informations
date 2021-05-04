'user strict'


// getting the table and form elements
let tableElement = document.getElementById('table');

let form = document.getElementById('form');

let container = document.getElementById('total')
//creating all objects array
let allDonors =[];

//creating global total variable
let total = 0;
let age=[];
//creating the constructor function

function Donor(donorName,donorAmount) {

    this.donorName= donorName;
    this.donorAmount= donorAmount;
    this.donorAge=0;
    allDonors.push(this);
    // age.push(this.donorAge);
    
    
}
 
let totalElement = document.createElement('p');
container.appendChild(totalElement);

function totalAmount() {
    let totalElement = document.createElement('p');
    container.appendChild(totalElement);
    totalElement.textContent= `Total: ${total}`;
//   for (let i = 0; i < allDonors.length; i++) {
//     total = total+ parseInt(allDonors[i].donorAmount);
      
//   }
  
}

//calling totalamount function
totalAmount();



function calulatingAge() {
    let cal = Math.floor(Math.random() * (30 - 18 + 1) + 18);  
    age.push(cal);
}




//creating prototypes methods
Donor.prototype.calculatingDonorAge= function () {
    
    this.donorAge = cal;
    //console.log(age);
    // age.push(this.donorAge);
  }


Donor.prototype.rendering= function() {
  let footer = document.createElement('tr');
  tableElement.appendChild(footer);
  let firstCell = document.createElement('td');
  footer.appendChild(firstCell);
  firstCell.textContent= this.donorName;
  let secondCell = document.createElement('td');
  footer.appendChild(secondCell);
  for (let i = 0; i < age.length; i++) {
    secondCell.textContent= this.donorAge=age[i];
      
  }
  ;
  let thirdCell = document.createElement('td');
  footer.appendChild(thirdCell);
  thirdCell.textContent= this.donorAmount;
  total = total+ parseInt(this.donorAmount);
  totalElement.textContent= `Total: ${total}`;
  console.log(total);
}


//saving to local storage
function savingToLocalStorage() {
    let value = JSON.stringify(allDonors);
    localStorage.setItem('donors',value);
}

//getting from local
function gettingFromLocalS() {
    let value = localStorage.getItem('donors');
    let returnedValue = JSON.parse(value);
     if(returnedValue){
    for (let i = 0; i < returnedValue.length; i++) {
        age[i]= returnedValue[i].donorAge;
        let reinstantiation = new Donor(returnedValue[i].donorName,returnedValue[i].donorAmount,returnedValue[i].donorAge);
        console.log(age);
        
        reinstantiation.rendering();
        
    }
}
}
//attaching the form to the event listener

form.addEventListener('submit',handleingSubmit);

//creating handlesubmiting function

function handleingSubmit(event) {
    event.preventDefault();
    calulatingAge();
    let name = event.target.donorname.value;
    let amount = event.target.donoramount.value;

    let donorProfile = new Donor(name,amount);
    
    // donorProfile.calculatingDonorAge();
    donorProfile.rendering();
    totalAmount();
    savingToLocalStorage();
}

gettingFromLocalS();