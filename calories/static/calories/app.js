//alert('hello');
const addTableButton = document.querySelector('button.add');
const table_body = document.getElementById('table_body');
var food_name = document.getElementById('food_name'); //getting the food name from dropdown men

var quantity_input =  document.getElementById('quantity_input');
var selectedValue;

var veg_cal = '{{veg.veg_cal}}';
var veg_name = '{{veg_name}}';
//console.log(name_table.children);
//console.log(food_name)

function getSelectedValue() {
    
    selectedValue = food_name.options[food_name.selectedIndex].text;
    console.log(selectedValue);

    const calo = document.getElementById('calo');

var z = `
{% if veg.veg_name == "${selectedValue}" %}
  {{veg.veg_cal}}
{% endif %}`;
calo.append(z);
    
}


addTableButton.addEventListener('click', ()=>{
    const table_row= document.createElement('TR');
    var table_data_food = document.createElement('TD');
    var table_data_Quantity = document.createElement('TD');
    var table_data_calorie= document.createElement('TD');

    table_data_food.innerText = food_name.options[food_name.selectedIndex].text;
    console.log("Inner txt of data: ",table_data_food.innerText);

    table_data_Quantity.innerHTML = Number(quantity_input.value);
    table_data_calorie.innerHTML = veg_cal;
    

    // if (table_data_food.innerText == veg_name){

    // }

    table_row.append(table_data_food);
    table_row.append(table_data_Quantity);
    table_row.append(table_data_calorie);
    quantity_input.value = "";

    table_body.append(table_row); //apending to table body (table row and table data)



    //console.log(table_body);
});


// const tb = document.getElementById('table_chart');
// const cell = tb.getElementsByTagName('td').length;
// for(let i=0; i<=cell; i+=2){ 
//     console.log(tb.getElementsByTagName('td')[i]);
// }



// for(let i=0; i<=cell; i+=2){ 
//     console.log(tb.getElementsByTagName('td')[i+1].innerHTML);
// }

// for(let i=0; i<=cell; i+=2){
//     if ( tb.getElementsByTagName('td')[i].innerHTML == selectedValue){
//         console.log(tb.getElementsByTagName('td')[i+1].innerHTML);
//     }
// }