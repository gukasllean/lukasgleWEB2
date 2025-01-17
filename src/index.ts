let hasil: number = 10;
hasil = 1000;

console.log(hasil)

interface personalData {
    name: string;
    age: number;
    email: string;
    address: string;
    hobbies: string[];
}

const personalData: personalData = {
    name: "John Doe",
    age: 20,
    email: "john@gmail.com",
    address: "Jl. Raya",
    hobbies: ["coding", "reading", "traveling"]
}

function printPersonalData(data: personalData) {
    console.log(`Name: ${data.name}`);
    console.log(`Age: ${data.age}`);
    console.log(`Email: ${data.email}`);
    console.log(`Address: ${data.address}`);
    console.log("Hobbies: ");
    data.hobbies.forEach((hobby) => {
        console.log(`-  ${hobby}`);
    });


    console.log("Age in details :")
    ageConversion(data.age);
}
printPersonalData(personalData);
function ageConversion(age: number) {
    console.log(`age in days: ${age * 365}`);
    console.log(`age in hours: ${age * 8760}`);
    console.log(`age in minutes: ${age * 525600}`);
    console.log(`age in seconds: ${age * 31536000}`);
}