import { appendChildrenList, makeDomwithProperties } from "./dom.js";

// ...

const productCard = makeDomwithProperties("div", {
  className: "product-card",
});

appendChildrenList($container, [productCard]);
