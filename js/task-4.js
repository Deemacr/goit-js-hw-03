// const countTotalSalary = function (employees) {
//     let totalSalary = 0;
//     let salaries = Object.values(employees);
//     for (const salary in salaries) {
//         totalSalary += salaries[salary];
//     }
//     return totalSalary;
// };


const countTotalSalary = function (employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
};


console.log(countTotalSalary({}));

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
);

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); 