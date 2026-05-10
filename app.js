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
        age: 41,
        occupation: "THE GOAT",
    },
    { type: "admin", name: "Mourinho", age: 63, role: "Manager" },
    {
        type: "user",
        name: "Messi",
        age: 40,
        occupation: "second GOAT",
    },
    { type: "admin", name: "Guardiola", age: 55, role: "Manager1" },
];
// Calling the the functions
const users = filterPersons(persons, "user", { name: "Ronaldo" });
const admins = filterPersons(persons, "admin", { role: "Manager" });
console.log(users, admins);
