const company = {
    name: "Squeak",
    ceo: {
        name: "Siddik",
        id: 26,
        address: 'Banglasesh'
    },
    department: {
        web: {
            head: 'Shama',
            id: 32
        },
        app: {
            head: 'Atik',
            id: 22
        }
    }

}

const { name, address } = company.ceo;
console.log(name, address);

const { head } = company.department.web;
console.log(head);