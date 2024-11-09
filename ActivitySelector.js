// Sample data
const restaurants = [
    "Italian Bistro",
    "Sushi Spot",
    "Taco Stand",
    "Pizza Place",
    "Steakhouse"
];

const recipes = [
    "Spaghetti Carbonara",
    "Chicken Stir-fry",
    "Grilled Cheese and Tomato Soup",
    "Beef Tacos",
    "Veggie Stir-fry"
];

const activities = [
    "Watch a Movie",
    "Play a Video Game",
    "Play a Board Game",
    "Do Something Random"
];

// Function to display options based on selection
function selectOption(option) {
    // Hide all sections first
    document.getElementById("goOutSection").style.display = 'none';
    document.getElementById("stayInSection").style.display = 'none';
    document.getElementById("activitySection").style.display = 'none';

    if (option === 'goOut') {
        showGoOutSection();
    } else if (option === 'stayIn') {
        showStayInSection();
    } else if (option === 'randomize') {
        randomizeEverything();
    }
}

// Show the "Go Out" section with restaurant options
function showGoOutSection() {
    document.getElementById("goOutSection").style.display = 'block';
    displayList("restaurantList", restaurants);
}

// Show the "Stay In" section with recipe options
function showStayInSection() {
    document.getElementById("stayInSection").style.display = 'block';
    displayList("recipeList", recipes);
}

// Display a list of options dynamically
function displayList(listId, list) {
    const listElement = document.getElementById(listId);
    listElement.innerHTML = ''; // Clear previous items

    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });

    // Show the activity selection section after Go Out or Stay In options
    if (listId === "restaurantList" || listId === "recipeList") {
        document.getElementById("activitySection").style.display = 'block';
        displayList("activityList", activities);
    }
}

// Randomize a selection from the list
function randomizeOption(type) {
    let randomItem;
    if (type === 'restaurant') {
        randomItem = restaurants[Math.floor(Math.random() * restaurants.length)];
        displayResult(`Randomized Restaurant: ${randomItem}`);
    } else if (type === 'recipe') {
        randomItem = recipes[Math.floor(Math.random() * recipes.length)];
        displayResult(`Randomized Recipe: ${randomItem}`);
    } else if (type === 'activity') {
        randomItem = activities[Math.floor(Math.random() * activities.length)];
        displayResult(`Randomized Activity: ${randomItem}`);
    }
}

// Randomize everything (Go Out, Stay In, and Activity)
function randomizeEverything() {
    const randomGoOut = Math.random() > 0.5;
    if (randomGoOut) {
        showGoOutSection();
    } else {
        showStayInSection();
    }

    randomizeOption(randomGoOut ? 'restaurant' : 'recipe');
    randomizeOption('activity');
}

// Display the result
function displayResult(result) {
    document.getElementById("result").textContent = result;
}
