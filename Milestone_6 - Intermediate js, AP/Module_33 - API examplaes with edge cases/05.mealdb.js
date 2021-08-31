const searchFood = async () => {
    const searchFiled = document.getElementById('search_field');
    const searchText = searchFiled.value;
    // console.log(searchText);
  searchFiled.value = '';
    if (searchText == '') {
      const searchResult = document.getElementById('search_result');
      searchResult.innerHTML = '';
      const div = document.createElement('div');
        div.classList.add('col-12');
        div.innerHTML = `
        <div class="col-12">
          <h1 class="text-center mt-4">Please Write a food name</h1>
        </div>
        `;
      searchResult.appendChild(div);
    } else {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

      const res = await fetch(url);
      const data = await res.json();
      displayFood(data.meals);

      // fetch(url)
      //   .then(res => res.json())
      //   .then(data => displayFood(data.meals))
      }
}


const displayFood = meals => {
  const searchResult = document.getElementById('search_result');
  searchResult.innerHTML = '';
    meals.forEach(meal => {
    // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
          <div onclick="loadFoodDetail(${meal.idMeal})" class="card h-100">
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

const loadFoodDetail = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetaile(data.meals[0]));
}


const displayMealDetaile = meal => {
  console.log(meal);
  const mealDetailes = document.getElementById('meal_detiles');
  mealDetailes.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card')
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Youtube links</a>
  </div>
  `;
  mealDetailes.appendChild(div);
}