var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob"; 
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; 
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "someone"; 
  leastFavoriteCustomer = "new person"; 
}
