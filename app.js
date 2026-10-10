const speciesName = "Californian Sea Lion";
let spotCount = 0;
spotCount = spotCount + 1;
console.log(speciesName);
console.log(spotCount);
const animals = [
    {
        name: "Californian Sea Lion", status: " Not Endangered", location: "California Coast"
    },
    {
        name: "Vaquita", status: " Critically Endangered", location: "Gulf of California"
    }
];
console.log(animals[0].name); //Californian Sea Lion
console.log(animals.length); //2
function describeAnimal(animal) {
    return animal.name + " is " + animal.status;
}
console.log(describeAnimal(animals[1])); //Vaquita is Critically Endangered
