function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "Please! provied an array";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['Shama', 'Sakib', 'Salman'];
const bigBuddy = megaFriend(friends);
console.log(bigBuddy);

if (friends.indexOf('Sakib') != -1) {
    console.log("Sakib is here");
}

if (friends.includes('Sakib')) {
    console.log("Sakib is here");
}