const ctSelector = document.getElementById("select-country") ;   // llamar el selector de país
const indSelector = document.getElementById("select-indicator"); // Declarar una variable para que me genere los indicadores de los paises
const yrSelector = document.getElementById("since-year"); // Declarar una variable para que me genere el rango de los años automaticamente en mi selector para año 
const ctNameToCtCode = {}; // Declarar una variable con un objeto vacío (le llamaría mapa tecnicamente es  correcto por que no hablo de estructura (no es objetos lo que almancena, si no la relacion de nombre de paías a codigo de país  ))
const indicatorNameToIndicatorCode ={};

// Función para cargar países
const loadCountry = (loadIndicator) => {//El parámetro es la funcion loadIndicator 
    //const ctOptions = Object.keys(WORLDBANK) ;  // Declarar una variable que traiga los Object.keys de mi objeto global(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
    //console.log(ctOptions);
    for (let i = 0; i < Object.keys(WORLDBANK).length; i++) {  // itera en las keys
        console.log(i);
        const ctCode = Object.keys(WORLDBANK)[i]; //trae el indice de cada key
        console.log(ctCode);
        //const ctName = WORLDBANK[ctCode].indicators[0].countryName; //trae el valor del countryName

        ctNameToCtCode[WORLDBANK[ctCode].indicators[0].countryName] = ctCode; //cambia el indice por el nombre del pais
        
        console.log(ctNameToCtCode);

        ctSelector.options[i + 1] = new Option(WORLDBANK[ctCode].indicators[0].countryName, i + 1);
    }
};



// 1. traer las 4 keys
// 2. traer los indicator


// user actions 
// Función para año desde 
const loadYear = () => { 
    for (let i = 1960; i <= 2017 ; i++) { // Implementar el ciclo para indicar los años
        yrSelector.options[i - 1959] = new Option(i, i - 1959); // se utiliza la resta para saltarme la opción seleccionar de mi html (ya que no es parte de mi objeto )
    }
};

// Función para año hasta  //*Tarea juntar las funciones de año
const loadYear2 = () => { 
    const yrSelec = document.getElementById("until-year"); // Declarar una variable para que me genere el rango de los años automaticamente en mi selector para año 
    for (let i = 1960; i <= 2017 ; i++) { // Implementar el ciclo para indicar los años
        yrSelec.options[i - 1959] = new Option(i, i - 1959) // se utiliza la resta para saltarme la opción seleccionar de mi html (ya que no es parte de mi objeto )
    }
};


// Función para indicadores 
const loadIndicator = (userActionEvent) => { 
    indSelector.options= [];
    indSelector.options [0] = new Option ("Seleccionar", 0);
    const country = ctSelector.options[userActionEvent.target.value].innerHTML;
    const countryIndicators = WORLDBANK[ctNameToCtCode[country]].indicators;
    for (let i =0; i < countryIndicators.length; i++) {;
        const indicatorName = countryIndicators [i].indicatorName;

        indSelector.options [i+1] = new Option (indicatorName, i +1);

        // if (i=0){
        //     indSelector.options = 
        // }
    }
   
};

// begining page selectors loading
loadCountry();
loadYear();
loadYear2 ();
ctSelector.addEventListener ("change", loadIndicator) 




//Función para mostrar resultados

const showResults = () => {  // mostrar resultados
    const selectedCountryID = ctSelector.value;
    const countryName =  ctSelector.options[selectedCountryID].innerHTML;
    const countryCode= ctNameToCtCode[countryName];
   
    
     const indicatorsID = indSelector.value;
     const indicatorName = indSelector.options[indicatorsID].innerHTML;
      
    
    const sinceYearsID = yrSelector.value;
    const yearNumber = yrSelector.options[sinceYearsID].innerHTML;


    
    //const untilYears = document.getElementById("until-year").value;
     result = filterData (countryCode, indicatorName, yearNumber); 
     document.getElementById("indicator-result").innerHTML = `<strong>Nombre del Indicador:</strong> ${indicatorName}<br>`;
    document.getElementById("figure-result").innerHTML =`<strong>Cantidad o porcentaje:</strong> ${result}<br>`;
    document.getElementById("year-result").innerHTML = `<strong>Año buscado:</strong> ${yearNumber}<br>`;
    search  ();
}
document.getElementById("search").addEventListener ("click",showResults);


// bOTON PARA PASAR A LA PAGINA SIGUIENTE
const search = () => {
    document.getElementById("choose-data").style.display = "none";
    document.getElementById("results").style.display = "inline";
}

    