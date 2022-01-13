

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText} `

    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {

    meals.forEach(meal => {
        console.log(meal)
        const searchResultDiv = document.getElementById('search-result')
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetailById(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `
        searchResultDiv.appendChild(div);

    });
}

const loadMealDetailById = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetail(data.meals))
}

const displayMealDetail = meals => {

    meals.forEach(meal => {
        const mealDetailsContainer = document.getElementById('meal-detail');
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <img src="${meal.strMealThumb}"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">Recipie</a>
        `
        mealDetailsContainer.appendChild(div)

    })
}