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
    vegaEmbed("#plot", schema, { actions: false });
    vegaEmbed("#plot2", schema2, { actions: false });
  }
})();
