const addToDb = name => {
    const exist = localStorage.getItem(name);
    if (!exist) {
        localStorage.setItem(name, 1);
    } else {
        const newCount = parseInt(exist) + 1;
        localStorage.setItem(name, newCount);

    }
    
}

export { addToDb };