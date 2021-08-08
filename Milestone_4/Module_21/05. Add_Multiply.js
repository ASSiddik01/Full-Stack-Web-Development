function woodCalculation(chairQuantity, tableQuantity, banchQuantity) {
    let perChairWood = 2;
    let perTableWood = 4;
    let perBanchWood = 5;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const banchWoodQuantity = banchQuantity * perBanchWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + banchWoodQuantity;
    return totalWood;
}

console.log(woodCalculation(3,3,4));