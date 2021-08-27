const searchFood = () => {
    const searchFiled = document.getElementById('search_field');
    const searchText = searchFiled.value;
    // console.log(searchText);

    searchFiled.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}


const displayFood = meals => {
    const searchResult = document.getElementById('search_result');
    meals.forEach(meal => {
    // console.log(meals);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
          <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
            </div>
          </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}