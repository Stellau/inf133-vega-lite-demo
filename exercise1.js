"use strict";

(function () {
  window.addEventListener("load", init);
  function init() {
    const schema = {
      data: { url: "https://vega.github.io/editor/data/cars.json" },
      mark: "bar",
      encoding: {
        x: { field: "Cylinders", type: "ordinal" },
        y: { field: "Acceleration", type: "quantitative", aggregate: "mean" },
      },
    };
    
    const schema2 = {
      data: { url: "https://vega.github.io/editor/data/cars.json" },
      mark: "bar",
      encoding: {
        x: { field: "Cylinders", type: "ordinal" },
        y: { field: "Acceleration", type: "quantitative", aggregate: "mean" },
      },
      transform: [
        { filter: { timeUnit: "year", field: "Year", gte: "1979" } },
        { filter: { field: "Origin", equal: "USA" } },
      ],
    };

    /* Your turn:
     * This (https://vega.github.io/editor/data/seattle-weather.csv) is the data set on Seattle's daily weather for 4 years.
     * Can you plot a histogram/bar chart that shows the aggregate count of days of different weather and grouped by the
     * months in the year? (Use #plot3)
     * For each bar (month), please show the number of days for each type of weather in a different color
     */
    
    vegaEmbed("#plot", schema, { actions: false });
    vegaEmbed("#plot2", schema2, { actions: false });
  }
})();
