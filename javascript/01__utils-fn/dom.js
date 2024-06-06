export const makeDomeWithProperties = (domType, propertyMap) => {
  // domType : div, a, li ...  = 생성할 DOM 요소의 종류를 나타내는 문자열
  // propertyMap : { "className" : "product-card", ... }   = 생성할 DOM 요소에 설정할 속성들을 담은 객체
  // Object.keys(propertyMap) -> ["className", "alt"]

  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};

export const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};
