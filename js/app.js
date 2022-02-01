document.querySelector('#loan-form').addEventListener('submit', function(e) {

  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'block';
  setTimeout(calculateLoan, 3000);
  e.preventDefault();
});

function calculateLoan(){
  
  const amount = document.querySelector('#amount').value;
  const rate = document.querySelector('#interest').value;
  const months = document.querySelector('#months').value;

  const monthlyPayment = document.querySelector('#monthly-Payment');
  const totalPayment = document.querySelector('#total-Payment');
  const totalInterest = document.querySelector('#total-interest');
  
   // Calculating interest per month
   const interest = (amount * (rate * 0.01)) / months;

   // Calculating total interest 
   const totalCalculatedInterest = interest * months;

   // Calculating monthly payment with interest
   const emi = ((amount / months) + interest).toFixed(2);

  //  calculating total payment with interest
   const totalCalculatedPayment = emi * months; 

   console.log('interest', interest);
   console.log('monthly emi', emi);

   if(isFinite(emi)) {
    monthlyPayment.value = emi;
    totalPayment.value = totalCalculatedPayment;
    totalInterest.value = totalCalculatedInterest;

    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
   } else {
     
    showError("Please Check Your Numbers");
   }

}

function showError(error) {

  document.querySelector('#loading').style.display = 'none';

  //Create a div
  const errorDiv = document.createElement('div');

  //Add class name
  errorDiv.className = 'alert alert-danger';

  //Create textnode and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear Error after 3 secs
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}