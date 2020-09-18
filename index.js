var user = [{
        name: "Leta Dickinson",
        age: 17,
        gender: "female",
        nationality: "Philippines",
    },
    {
        name: "Jodie Hermann Sr.",
        age: 30,
        gender: "male",
        nationality: "Germany",
    },
    {
        name: "Alice Hessel",
        age: 18,
        gender: "female",
        nationality: "Samoa"
    },
    {
        name: "Ahmad Monahan",
        age: 7,
        gender: "male",
        nationality: "Morocco"
    },
    {
        name: "Ms. Carter Dach",
        age: 28,
        gender: "female",
        nationality: "Belgium",
    },
];

var data = user.filter(user => user.gender == 'female')
console.log(data);

var s = user
data.map(
    (s) => {
        document.write('<br>');
        document.write('Name : ' + s.name + '<br/>');
        document.write('Age : ' + s.age + '<br/>');
        document.write('Nationality : ' + s.nationality);
        document.write('<hr>');

    }
)