

const ctSelector = document.getElementById("country") ;   // Declarar una variable para llamar el selector de país
const ctNameToCtCode = {}; // Declarar una variable con un objeto vacío (le llamaría mapa tecnicamente es  correcto por que no hablo de estructura (no es objetos lo que almancena, si no la relacion de nombre de paías a codigo de país  ))


// Función para país
const loadCountry = (loadIndicator) => {  // Declarar una función para que me genere las opciones de paises, y que me genere automaticamente mis opciones de indicadpres por país (se escribe como argumento y despues se va a declarar como función)
    const ctOptions = Object.keys(WORLDBANK) ;  // Declarar una variable que traiga los Object.keys de mi objeto global(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
    for (let i = 0; i < ctOptions.length; i++) {  // ciclo for 
        const ctCode = ctOptions[i]; // Declarar una variable que traiga el indice
        const ctName = WORLDBANK[ctCode].indicators[0].countryName;
        ctNameToCtCode[ctName] = ctCode;
        ctSelector.options[i + 1] = new Option(ctName, i + 1);
    }
};

// user actions 
// Función para año desde 
const loadYear = () => { 
    const yrSelector = document.getElementById("since-year"); // Declarar una variable para que me genere el rango de los años automaticamente en mi selector para año 
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
const loadIndicator = (evento) => { 
    const indSelector = document.getElementById("select-indicator"); // Declarar una variable para que me genere los indicadores de los paises
    indSelector.options= [];
    indSelector.options [0] = new Option ("Seleccionar", 0);
    const country = ctSelector.options[evento.target.value].innerHTML;
    const countryIndicators = WORLDBANK[ctNameToCtCode[country]].indicators;
    for (let i =0; i < countryIndicators.length; i++) {;
        const indicatorName = countryIndicators [i].indicatorName;

        indSelector.options [i+1] = new Option (indicatorName, i +1);
    }
   
};

// begining page selectors loading
loadCountry();
loadYear();
loadYear2 ();
ctSelector.addEventListener ("change", loadIndicator)
//window.filterData ("MEX","Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", "2016")

//Función para botón buscar, cambiar de pantalla







//Función para mostrar resultados

const showResults = () => {  // mostrar resultados
    const countries = document.getElementById("country").value; 
     const indicators = document.getElementById("select-indicator").value;
     const sinceYears = document.getElementById("since-year").value;
     const untilYears = document.getElementById("until-year").value;
     let result; 
     console.log (result);
    
    result = filterData (countries, indicators,sinceYears); 
    document.getElementById("filter").value = result;
   
}
//document.getElementById("search").addEventListener ("click",showResults);

const hideShow = (hide,show) => {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "inline";
}

const search = () => {
    document.getElementById("search").addEventListener ("click", hideShow("choose-data","results"));
    //document.getElementById("search").addEventListener ("click", showResults);

}
