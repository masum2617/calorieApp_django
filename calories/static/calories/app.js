const addTableButton = document.querySelector('button.add');
const calculateBtn = document.querySelector('button.calculate');
const toggleChart = document.getElementById('toggleChart');
const chartDiv = document.getElementById('chart');


var food_name = document.getElementById('food_name'); //getting the food name from dropdown men
var food_category = document.getElementById('food_category');

var age = document.getElementById('age');
var quantity_input =  document.getElementById('quantity_input');

var selectedValue_foodName;
var selectedValue_category;
var selectedValue_age;

function getSelectedValue() {
    
    selectedValue_foodName = food_name.options[food_name.selectedIndex].text;
    console.log(selectedValue_foodName); 
}

function getSelectedValue_category() {
    
  selectedValue_category = food_category.options[food_category.selectedIndex].text;
  console.log(selectedValue_category); 
}

function getSelectedValue_age() {
    
  selectedValue_age = age.options[age.selectedIndex].value;
  console.log(selectedValue_age); 
}

function calculateCalorie(givenQuantity, calorieFromChart){
  if (givenQuantity != 0){
    var r = (givenQuantity * calorieFromChart)/100;
    //console.log(r);
    return r;   
  } else {
    var r = '-';
    return calorieFromChart;
  }

  
}


addTableButton.addEventListener('click', ()=>{
    //const input_table = document.getElementById('input_table');
    
    const table_body_input = document.getElementById('table_body_input');
    const table_row= document.createElement('TR');
    var table_data_food = document.createElement('TD');
    var table_data_Quantity = document.createElement('TD');
    var table_data_calorie= document.createElement('TD');
    var chart_table_calorie;

    const chartTable = document.getElementById('table_chart');
    const table_data_length = chartTable.getElementsByTagName('td').length;

    table_data_food.innerText = food_name.options[food_name.selectedIndex].text;
    console.log('quantity valu: ', quantity_input.value)

    
    table_data_Quantity.innerHTML = quantity_input.value.toString();
  
    input_table.style.display = 'block';

    // getting the table data calorie

    for(let i=0; i<=table_data_length; i+=2){
        if ( chartTable.getElementsByTagName('td')[i].innerHTML == selectedValue_foodName){
           // console.log(Number(chartTable.getElementsByTagName('td')[i+1].innerHTML));
           chart_table_calorie = Number(chartTable.getElementsByTagName('td')[i+1].innerHTML);

           if (table_data_Quantity.innerHTML == ""){
             table_data_Quantity.innerHTML = '<small>100 (default)</small>';
           } 
           
          table_data_calorie.innerHTML = calculateCalorie(Number(quantity_input.value), chart_table_calorie).toFixed(2);
           
           table_row.append(table_data_food);
           table_row.append(table_data_Quantity);
           table_row.append(table_data_calorie);
           quantity_input.value = "";
           table_body_input.append(table_row); //apending to table body (table row and table data)

        }
    }

});



toggleChart.addEventListener('click', ()=>{
  if (chartDiv.style.display == 'none'){
    toggleChart.textContent = 'Hide Chart';
    chartDiv.style.display = 'block';
  } else {
    toggleChart.textContent = 'Show Chart';
    chartDiv.style.display = 'none';
  }
});

calculateBtn.addEventListener('click', ()=>{
  const resultDiv = document.getElementById('totalResultView');
  
  resultDiv.style.display = 'block';
  const table_body_input = document.getElementById('table_body_input');
  const input_table_length = table_body_input.getElementsByTagName('td').length;
  console.log("length: ",input_table_length);
  const total_calorie_consumed = document.querySelector('#total_calorie_consumed');
  const target = document.querySelector('#target');
  const remaining = document.querySelector('#remain');

  const selectedGender = document.querySelector('input[name="gender"]:checked').value;
  console.log(selectedGender);

  const selectedActivity = document.querySelector('input[name="activity_level"]:checked').value;
  console.log(selectedActivity);

  var sum_of_calorie=0;
  var inputed_calorie;

  for (let i=2; i<= input_table_length; i+=3){
    
      inputed_calorie = Number(table_body_input.getElementsByTagName('td')[i].innerHTML);
      sum_of_calorie += inputed_calorie;
      console.log("the datas: ", inputed_calorie);

  }
  total_calorie_consumed.innerHTML = sum_of_calorie.toFixed(2);
  
  //inactive female
  if (selectedGender == 'female' && selectedActivity == 'inactive'){
    if (selectedValue_age == "1" || selectedValue_age == "3" || selectedValue_age == '4'){
      const femaleCalorieNeed = 1800;
      target.innerHTML = `${femaleCalorieNeed} calories (as female)`;
      remaining.innerHTML = Number(femaleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

    if (selectedValue_age == "2"){
      const femaleCalorieNeed = 2000;
      target.innerHTML = `${femaleCalorieNeed} calories (as female)`;
      remaining.innerHTML = Number(femaleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }
  }
  //moderate female
  else if (selectedGender == 'female' && selectedActivity == 'moderate') {
    if (selectedValue_age == "1" || selectedValue_age == "3" || selectedValue_age == '4'){
      const femaleCalorieNeed = 2000;
      target.innerHTML = `${femaleCalorieNeed} calories (as female)`;
      remaining.innerHTML = Number(femaleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

    if (selectedValue_age == "2"){
      const femaleCalorieNeed = 2200;
      target.innerHTML = `${femaleCalorieNeed} calories (as female)`;
      remaining.innerHTML = Number(femaleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }
  }

//active female
  else if (selectedGender == 'female' && selectedActivity == 'active') {
    if (selectedValue_age == "1" || selectedValue_age == "3" || selectedValue_age == '2'){
      const femaleCalorieNeed = 2400;
      target.innerHTML = `${femaleCalorieNeed} calories (as female)`;
      remaining.innerHTML = Number(femaleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

    if ( selectedValue_age == '4'){
      const femaleCalorieNeed = 2200;
      target.innerHTML = `${femaleCalorieNeed} calories (as female)`;
      remaining.innerHTML = Number(femaleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }
  }

  // inactive Male
  else if(selectedGender == 'male' && selectedActivity == 'inactive') {
    
    if (selectedValue_age == "1" || selectedValue_age == "2" || selectedValue_age == '3' || selectedValue_age == "4"){
      const maleCalorieNeed = 2400;
      target.innerHTML = `${maleCalorieNeed} calories (as male)`;
      remaining.innerHTML = Number(maleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

    

  }

  //moderate Male
  else if(selectedGender == 'male' && selectedActivity == 'moderate') {
    
    if (selectedValue_age == "1" || selectedValue_age == "2"){
      const maleCalorieNeed = 2800;
      target.innerHTML = `${maleCalorieNeed} calories (as male)`;
      remaining.innerHTML = Number(maleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

    if ( selectedValue_age == '3' || selectedValue_age == '4'  ){
      const maleCalorieNeed = 2600;
      target.innerHTML = `${maleCalorieNeed} calories (as male)`;
      remaining.innerHTML = Number(maleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

  }

//active male
  else if(selectedGender == 'male' && selectedActivity == 'active') {
    
    if (selectedValue_age == "1"){
      const maleCalorieNeed = 3200;
      target.innerHTML = `${maleCalorieNeed} calories (as male)`;
      remaining.innerHTML = Number(maleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

    if ( selectedValue_age == "2" || selectedValue_age == '3' || selectedValue_age == "4"){
      const maleCalorieNeed = 3000;
      target.innerHTML = `${maleCalorieNeed} calories (as male)`;
      remaining.innerHTML = Number(maleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';
    }

  }

  
 
  console.log("sum: ",sum_of_calorie.toFixed(2));
  
})