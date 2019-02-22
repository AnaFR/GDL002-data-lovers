const ctSelector = document.getElementById("select-country") ;   // llamar el selector de país
const indSelector = document.getElementById("select-indicator"); // Declarar una variable para que me genere los indicadores de los paises
const yrSelector = document.getElementById("since-year"); // Declarar una variable para que me genere el rango de los años automaticamente en mi selector para año 
const ctNameToCtCode = {}; //objeto creado para almacenar los nombres de los países Perú:PER
const indicatorNameToIndicatorCode ={};

//  indicatorNameToIndicatorCode[WORLDBANK[ctCode].indicators[0].indicatorName] = 

// Función para cargar países
const loadCountry = (loadIndicator) => {//El parámetro es la funcion loadIndicator 

    for (let i = 0; i < Object.keys(WORLDBANK).length; i++) {  // itera en las keys
        console.log(i);
        const ctCode = Object.keys(WORLDBANK)[i]; //trae el indice de cada key
        console.log(ctCode);

        ctNameToCtCode[WORLDBANK[ctCode].indicators[0].countryName] = ctCode; 
        //crea la propiedad Name y le da el valor del código en el objeto ctNameToCtCode

        console.log(ctNameToCtCode);

        ctSelector.options[i + 1] = new Option(WORLDBANK[ctCode].indicators[0].countryName, i + 1); //
    }
};




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
    //indSelector.options= [];
    //indSelector.options [0] = new Option ("Seleccionar", 0);
    const countrySelected = ctSelector.options[userActionEvent.target.value].innerHTML;//trae el valor de País seleccionado por el usuario
    const countryIndicators = WORLDBANK[ctNameToCtCode[countrySelected]].indicators; 
    //llama el valor seleccionado del objeto ctNameToCtCode,cambia Perú por PER y trae sus indicadores
    for (let i =0; i < countryIndicators.length; i++) {;//itera en los índices de los indicadores
        //console.log(i);

        const indicatorIdx = countryIndicators[i];
        //console.log(indicatorIdx);



        const getIndicatorName = countryIndicators[i].indicatorCode;//trae el código de cada indice de los indicadores

        const getIndicatorCode = countryIndicators[i].indicatorName;//trae el nombre de cada indice de los indicadores

        indicatorNameToIndicatorCode[getIndicatorName] = getIndicatorCode;
        //crea la propiedad indicatorCode y le asigna el valor de indicatorName en el objeto indicatorNameToIndicatorCode

        console.log(indicatorNameToIndicatorCode);

        indSelector.options [i+1] = new Option (getIndicatorName, i +1);



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
   
    
    // const indicatorsID = indSelector.value;
    // const indicatorName = indSelector.options[indicatorsID].innerHTML;
      
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

    