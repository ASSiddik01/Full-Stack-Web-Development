// const deshiBank = owner => {
//     balance = 0;
//     return amount => {
//         balance += amount;
//         return balance;
//     }
// }


// const bank = deshiBank('Sonali');
// console.log(bank(200));
// console.log(bank(200));
// console.log(bank(200));



const deshiBank = owner => {
    balance = 0;
    return {
        deposite:amount => {
            balance += amount;
            return balance;
        },
        withdrow:amount => {
            balance -= amount;
            return balance;
        }
    }
}


const bank = deshiBank('Sonali');
console.log(bank.deposite(200));
console.log(bank.deposite(200));
console.log(bank.deposite(200));
console.log(bank.withdrow(200));

