"use strict";

(function () {
  window.addEventListener("load", init);
  function init() {
    /* Plots a bar chart that aggregates the mean of acceleartion and group by the number
     * of cylinders
     */
    const schema = {
      data: { url: "https://vega.github.io/editor/data/cars.json" },
      mark: "bar",
      encoding: {
        x: { field: "Cylinders", type: "ordinal" },
        y: { field: "Acceleration", type: "quantitative", aggregate: "mean" },
      },
    };
    /* Plots a bar chart that aggregates the mean of acceleartion and group by the number
     * of cylinders and filters the data so we only see the data of cars made in USA
     * in or after 1979
     */
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
    const schema3 = {
      data: { url: "https://vega.github.io/editor/data/seattle-weather.csv" },
      mark: "bar",
      encoding: {
        x: { timeUnit: "month", field: "date", type: "ordinal" },
        y: { aggregate: "count", field: "*", type: "quantitative" },
        color: { field: "weather", type: "nominal" },
      },
    };
    vegaEmbed("#plot3", schema3, { actions: false });
    vegaEmbed("#plot", schema, { actions: false });
    vegaEmbed("#plot2", schema2, { actions: false });
  }
})();
