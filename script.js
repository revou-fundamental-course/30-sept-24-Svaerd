const converter = document.querySelector('#converter');
const detailsText = document.querySelector('.detailsText');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
 
const C = document.querySelector('.C');
const F = document.querySelector('.F');

const swap = ()=> {
   if(C.innerHTML === '°C'){
      C.innerHTML = '°F';
      F.innerHTML = '°C';
      converter.placeholder = "°F";
   }else{
      F.innerHTML = '°F';
      C.innerHTML ='°C';
      converter.placeholder = "°C";
  };
};

const reset = ()=>{
  converter.value = '';
  detailsText.innerHTML = '';
  detailsText.style.margin ="10px 0";
}

const convert = ()=> {
   if(/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)){
      detailsText.style.color ="black";
      detailsText.style.margin ="10px 0 220px";
      if(C.innerHTML === '°C'){
      let value = (converter.value * 1.8) + 32;
      detailsText.innerHTML = `
      <p>
         ${converter.value}°C is equal to <b>${value.toFixed(2)}°F</b>
      </p>
      <p>
         Calculation:
         <br>
         ${converter.value} * 1.8 + 32 = ${value.toFixed(2)}°F
      </p>
      <p>
         Formula:
         <br>
         <b>Tc</b> = (<b>Tf</b> - 32) * 1.8
      <p>
      </p>
         With:
         <br>
         <b>Tc</b> = temperature in Celsius.
         <br>
         <b>Tf</b> = temperature in Fahrenheit.
      </p>`;
   }
   else{
      let value = (converter.value - 32) / 1.8;
      detailsText.innerHTML = `
      <p>
         ${converter.value}°F is equal to <b>${value.toFixed(2)}°C</b>
      </p>
      <p>
         Calculation:
         <br>
         (${converter.value} - 32) / 1.8 = ${value.toFixed(2)}°C
      </p>
      <p>
         Formula:
         <br>
         <b>Tc</b> = (<b>Tf</b> - 32) / 1.8
      <p>
      </p>
         With:
         <br>
         <b>Tc</b> = temperature in Celsius.
         <br>
         <b>Tf</b> = temperature in Fahrenheit.
      </p>`;
    }
   }else if(converter.value == ''){
      alert("Please enter a number")
   }else{
      alert("Enter numbers only")
  }

}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);