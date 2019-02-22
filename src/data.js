const filterData = (country,indicatorNm,year) => {
  const countryData = WORLDBANK[country]
  const countryIndicators = countryData.indicators
   for (let i= 0;  i < countryIndicators.length; i++) {
    const indicatorData= countryIndicators[i]
    if (indicatorData.indicatorCode = indicatorNm ) {
     const figure = indicatorData.data[year];

     if (figure == "") {
     	return "ND"
     }

     return figure;
    }
 
   };
 }
 
 
 
 
 window.filterData = filterData 


          

