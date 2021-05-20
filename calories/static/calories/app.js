const addTableButton = document.querySelector('button.add');

const calculateBtn = document.querySelector('button.calculate');
// const chartTable = document.getElementById('table_chart');
// const table_data_length = chartTable.getElementsByTagName('td').length;

const toggleChart = document.getElementById('toggleChart');
const chartDiv = document.getElementById('chart');

var food_name = document.getElementById('food_name'); //getting the food name from dropdown men

var quantity_input =  document.getElementById('quantity_input');
var selectedValue;
const femaleCalorieNeed = 2000;
const maleCalorieNeed = 2500;

function getSelectedValue() {
    
    selectedValue = food_name.options[food_name.selectedIndex].text;
    console.log(selectedValue); 
}

function calculateCalorie(givenQuantity, calorieFromChart){
  if (givenQuantity != 0){
    var r = (givenQuantity * calorieFromChart)/100;
    //console.log(r);
    return r;   
  } else {
    //var r = '-';
    return calorieFromChart;
  }

  
}


addTableButton.addEventListener('click', ()=>{
    const table_body_input = document.getElementById('table_body_input');
    const table_row= document.createElement('TR');
    var table_data_food = document.createElement('TD');
    var table_data_Quantity = document.createElement('TD');
    var table_data_calorie= document.createElement('TD');
    var chart_table_calorie;

    const chartTable = document.getElementById('table_chart');
    const table_data_length = chartTable.getElementsByTagName('td').length;

    table_data_food.innerText = food_name.options[food_name.selectedIndex].text;


    table_data_Quantity.innerHTML = quantity_input.value.toString();
    console.log("quant: ", quantity_input.value+2);

    // getting the table data calorie

    for(let i=0; i<=table_data_length; i+=2){
        if ( chartTable.getElementsByTagName('td')[i].innerHTML == selectedValue){
           // console.log(Number(chartTable.getElementsByTagName('td')[i+1].innerHTML));
           chart_table_calorie = Number(chartTable.getElementsByTagName('td')[i+1].innerHTML);
           table_data_calorie.innerHTML = calculateCalorie(Number(quantity_input.value), chart_table_calorie);

          // console.log(calculateCalorie);
           //table_data_calorie.innerHTML = calculateCalorie;
           //console.log("inner: ",chart_table_calorie);

           

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
  const table_body_input = document.getElementById('table_body_input');
  const input_table_length = table_body_input.getElementsByTagName('td').length;
  console.log("length: ",input_table_length);
  const total_calorie_consumed = document.querySelector('#total_calorie_consumed');
  const target = document.querySelector('#target');
  const remaining = document.querySelector('#remain');

  const selectedGender = document.querySelector('input[type="radio"]:checked').value;
  console.log(selectedGender);


  var sum_of_calorie=0;
  var inputed_calorie;

  for (let i=2; i<= input_table_length; i+=3){
    
      inputed_calorie = Number(table_body_input.getElementsByTagName('td')[i].innerHTML);
      sum_of_calorie += inputed_calorie;
      console.log("the datas: ", inputed_calorie);

  }
  total_calorie_consumed.innerHTML = sum_of_calorie.toFixed(2);
  

  if (selectedGender == 'female'){
    target.innerHTML = `${femaleCalorieNeed} calories (as female)`;
    remaining.innerHTML = Number(femaleCalorieNeed) - sum_of_calorie.toFixed(2)+' calories ';

  } else {
    target.innerHTML = `${maleCalorieNeed} calories (as male)`;
    remaining.innerHTML = Number(maleCalorieNeed) - sum_of_calorie.toFixed(2);
  }
  console.log("sum: ",sum_of_calorie.toFixed(2));
  
})