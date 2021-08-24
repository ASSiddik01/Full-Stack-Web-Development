class Work {
    name;
    role = 'Support Developer';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    supportSession() {
        console.log('Start support seassion');
    }
}

const shama = new Work ('Shama','Bangladesh');
console.log(shama);