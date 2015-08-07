var people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]

//so, the array is fully intialized and full of dta,
// let's access the data!

console.log(people);
// get the jane object.
console.log(people[1].greet());
