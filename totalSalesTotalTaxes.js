var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },

  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },

  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }

];


function calculateSalesTax(salesData, taxRates) {

  // Create an empty object to hold report data
  var report = {};

  // loops over indexs in salesData(companySalesData)
  for ( var i in salesData) {

    // so now company will have the data for the current company
    var company = salesData[i];

    // Check if company object is in Report
    if ( report[company.name] === undefined ) {

      // ----------------------------------------------------------------------
      // Init

      // if it is not then put the name into the report
      report[company.name] = {
        totalSales: 0,
        totalTaxes: 0
      };

      // ----------------------------------------------------------------------
      // Sales

      var totalSaleInCompany = 0; // always starts at zero for each branch

      // looping over each sale and adding it to the report total sales
      for ( var j = 0; j <  company.sales.length; j++ ) {
        totalSaleInCompany += company.sales[j];
      }


      // Add the total to total sales in to whole company
      report[company.name].totalSales += totalSaleInCompany;

      // ----------------------------------------------------------------------
      // Taxes

      // Calculate the tax using the total sales of the branch
      // instead use the total company sales value

      var provinceTax = taxRates[company.province];
      var totalTax = provinceTax * totalSaleInCompany;

      //in square brackets because its a variable.
      report[company.name].totalTaxes += totalTax;

    }



    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // ALL THE SAME CODE ABOVE
    // WE CAN REFACTOR LATER

    else {


      // ----------------------------------------------------------------------
      // Sales
      var totalSaleInCompany = 0;
      // looping over each sale and adding it to the report total sales
      for ( var j = 0; j <  company.sales.length; j++ ) {
        totalSaleInCompany += company.sales[j];

      }
      report[company.name].totalSales += totalSaleInCompany

      // ----------------------------------------------------------------------
      // Taxes

      var provinceTax = taxRates[company.province];
      var totalTax = provinceTax * totalSaleInCompany;
      //in square brackets because its a variable.
      report[company.name].totalTaxes += totalTax;


    }

    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------

  }



  console.log(report);

}



calculateSalesTax( companySalesData, salesTaxRates );


