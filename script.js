// Function to update the content of a specified div element with a list of food items
function updateFoodList(elementId, foodList) {
    const container = document.getElementById(elementId);
    container.innerHTML = foodList.map(food => `<p>${food}</p>`).join('');
  }
  
  (async () => {
    try {
      // Fetch the JSON data from the file using fetch (assuming 'food.json' is in the same directory as the HTML file)
      const response = await fetch('food.json');
      const jsonData = await response.json();

      function listAllFoodItems(data) {
        return data.map(item => item.foodname);
      }


// Function to list all the food items with category "Fruit".
function listFruits(data) {
    return data.filter(item => item.category === 'Fruit').map(item => item.foodname);
  }
  
  // Function to list all the food items with category "Vegetable".
  function listVegetables(data) {
    return data.filter(item => item.category === 'Vegetable').map(item => item.foodname);
  }
  
  //list all the food items with category protien
  function listitemswithprotein(data){
      return data.filter(item=> item.category === 'Protein').map(item=>item.foodname);
  }
  
  //list all the food items with category nuts
  function nuts(data){
      return data.filter(item=> item.category === 'Nuts').map(item=>item.foodname);
  }
  
  // list all the food items with category grains
  function grains(data){
      return data.filter(item=>item.category==='Grain').map(item=>item.foodname);
  }
  
  //list all the food items with category dairy
  function dairy(data){
      return data.filter(item=>item.category==='Dairy').map(item=>item.foodname);
  }
  
  //list all the food items with calorie above 100
  function calorie(data){
      return data.filter(item=>item.calorie>100).map(item=>item.foodname);
  }
  
  //list all the food items with calorie below 100
  function lesscalorie(data){
      return data.filter(item=>item.calorie<100).map(item=>item.foodname);
  }
  
  //list all the food items with highest protien content to lowest
  function listFoodItemsByHighestProtein(data){
      return data.sort((a,b)=>b.protiens-a.protiens).map(item=>item.foodname);
  }
  
  //
  function listFoodItemsByLowestCarbs(data) {
      return data.sort((a, b) => a.cab - b.cab).map(item => item.foodname);
    }
  
  
      // Call the various functions to process the JSON data
      const allFoodItems = listAllFoodItems(jsonData);

      const fruits = listFruits(jsonData);
  
      const vegetables = listVegetables(jsonData);
  
      const protien = listitemswithprotein(jsonData);
  
      const foodnuts = nuts(jsonData);
  
      const foodgrains = grains(jsonData);
  
      const foodDairy = dairy(jsonData);
      
      const calories = calorie(jsonData);
  
      const Lesscalories = lesscalorie(jsonData);

      const highesttolowest = listFoodItemsByHighestProtein(jsonData);

      const lowesttohighest = listFoodItemsByLowestCarbs(jsonData);


  
      // Update the HTML content
      updateFoodList('allFoodItems', allFoodItems);
      updateFoodList('fruits', fruits);
      updateFoodList('vegetables', vegetables);
      updateFoodList('protien', protien);
      updateFoodList('foodnuts', foodnuts);
      updateFoodList('foodgrains', foodgrains);
      updateFoodList('calories', calories);
      updateFoodList('Lesscalories', Lesscalories);
      updateFoodList('highesttolowest', highesttolowest);
      updateFoodList('lowesttohighest', lowesttohighest);


  
    } catch (error) {
      console.error('Error reading JSON data:', error);
    }
  })();
  