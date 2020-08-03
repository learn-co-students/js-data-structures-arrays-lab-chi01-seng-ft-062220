// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"] ; 

function destructivelyAppendDriver(driver) {
    drivers.push(driver)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
    return drivers 
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
    return drivers
}

function appendDriver (name) {
    return [...drivers, name];
}

function removeFirstDriver () {
    return drivers.slice(1);
}

function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
}

function prependDriver (name) {
    return [name, ...drivers];
  }