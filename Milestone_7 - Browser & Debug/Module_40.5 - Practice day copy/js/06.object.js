"use strict";
const city = 'Dhaka';
const fruits = ['mango', 'banana', 'apple'];
const student = {
    name: 'Kamal Atartuk',
    age: 115,
    salary: 4500
};
const employee = {
    name: 'Solaiman',
    age: 29,
    salary: 1000000
};
function getSalary(player) {
    return player.salary;
}
getSalary({ name: 'kuddus', salary: 50 });
function getSalary2(player) {
    return player.salary;
}
