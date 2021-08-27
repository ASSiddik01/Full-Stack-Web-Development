const searchFood = () => {
    const searchFiled = document.getElementById('search_field');
    const searchText = searchFiled.value;
    // console.log(searchText);

    searchFiled.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}