// Code your solution here
function findMatching (array, string) {
    const driverNames = array.filter(function (name) {
        return name.toLowerCase() === string.toLowerCase();
    });
    return driverNames;
}

function fuzzyMatch(array, string) {
    const driverNames = array.filter(function (name) {
        return name.toLowerCase().substring(0, string.length) === string.toLowerCase();
    })
    return driverNames;
}

function matchName(array, string) {
    const newArray = array.filter(function (prop) {
        return prop.name === string;
    })
    return newArray;
}