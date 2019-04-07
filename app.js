const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#cancel');
const confirmBtn = document.querySelector('#confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let total = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0
    ) {
        alertCtrl.create(
            {
                message: 'Please enter a valid reason and amount!',
                header: 'Invalid inputs',
                buttons: ['Okay']
            }
        ).then(alertElement => {
            alertElement.present();
        });
        return
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    expensesList.appendChild(newItem);
    // to convert enteredAmount from string to number unary plus if your string is already in the form of an integer:
    // @link https://stackoverflow.com/a/1133814/5360905
    total += +enteredAmount;
    totalExpenses.textContent = total;
    clear();
});

cancelBtn.addEventListener('click', clear);