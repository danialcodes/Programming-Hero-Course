const spinner = document.getElementsByClassName('spinner')[0];
const show = () => {
    spinner.classList.remove('invisible');
    spinner.classList.add('visible');
}
const hide = () => {
    spinner.classList.remove('visible');
    spinner.classList.add('invisible');
}
const searchFood = async () => {
    show();
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    searchFiled.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // const res = await fetch(url);
    // const data = await res.json();
    // display(data.meals);
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.meals))
        .catch(err => console.log(err));
}

const display = meals => {
    hide()
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');

        const mealCard = `
        <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${meal.strInstructions.slice(0, 100)}
                </p>
            </div>
        </div>
        `;
        div.innerHTML = mealCard;
        searchResult.appendChild(div);
    });
}

const mealDetails = async (idMeal) => {
    // const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    show();
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res = await fetch(url);
    const data = await res.json();
    display(data.meals);
    // fetch(url)
    // .then(res => res.json())
    // .then(data => display(data.meals));

}