const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
};

//first level spread. Props of address are copied as reference
const spiderman = {...ironman};

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
//Modification of address will affect ironman props either

//The better way 
const spidermanUnique = structuredClone(ironman);
spidermanUnique.firstName = 'Peter';
spidermanUnique.lastName = 'Parker';
spidermanUnique.age = 22;

console.log(ironman, spiderman, spidermanUnique);