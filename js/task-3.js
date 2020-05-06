const findBestEmployee = function (employees) {
    let taskCount = 0;
    let name = '';
    for (let [key, value] of Object.entries(employees)) {
        if (value > taskCount) {
            taskCount = value;
            name = key;
        }
    }
    return name;
}


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);