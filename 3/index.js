function magicTemplate(strings, ...keys) {
  const findPropValue = (prop, arr) => arr?.find((el) => el.hasOwnProperty(prop))?.[prop];

  return (...values) => {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function (key, i) {
      let value;
      if (typeof key === "object") {
        const [k, v] = Object.entries(key)[0];
        value = findPropValue(k, values) || v;
      } else {
        value = Number.isInteger(key) ? values[key] : dict[key];
      }
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const firstName = "James";
const lastName = "Bond";

const update = magicTemplate`My name is ${{ lastName }}. ${{ firstName }} ${{ lastName }}.`;

console.log(update({ firstName: "George" }));
console.log(update({ lastName: "Weasley" }));
console.log(update({ firstName: "Ron" }));
