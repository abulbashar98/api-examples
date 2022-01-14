const searchFood = async () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    searchField.value = '';

    if (searchText == '') {
        console.log('insert the food you want')
    }

    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText} `


        const response = await fetch(url);
        const data = await response.json();
        displaySearchResult(data.meals);

        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => displaySearchResult(data.meals))
    }

}

const displaySearchResult = meals => {
    const searchResultDiv = document.getElementById('search-result');
    searchResultDiv.textContent = '';


    if (meals.length == 0) {
        console.log('food not found')
    }

    else {
        meals.forEach(meal => {
            console.log(meal)

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

}

const loadMealDetailById = async idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`


    const response = await fetch(url);
    const data = await response.json();
    displayMealDetail(data.meals);



    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => displayMealDetail(data.meals))
}

const displayMealDetail = meals => {



    meals.forEach(meal => {
        const mealDetailsContainer = document.getElementById('meal-detail');
        mealDetailsContainer.innerHTML = ``;


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