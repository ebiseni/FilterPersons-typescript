export function filterPersons(persons, personType, criteria) {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
const persons = [
    {
        type: "user",
        name: "Ronaldo",
        age: 40,
        occupation: "THE GOAT",
    },
    { type: "admin", name: "Tkay", age: 2, role: "Manager" },
];
// Calling the the functions
const users = filterPersons(persons, "user", { name: "Ronaldo" });
const admins = filterPersons(persons, "admin", { role: "Manager" });
console.log(users, admins);
