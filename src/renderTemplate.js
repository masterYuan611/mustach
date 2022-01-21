/*
函数的功能是，让tokens数组变成dom字符串
*/
import lookup from "./lookup";

export default function renderTemplate(tokens, data) {
  let domStr = "";
  tokens.forEach((item) => {
    if (item[0] === "text") {
      domStr += item[1];
    } else if (item[0] === "name") {
      domStr += lookup(data, token[1]);
    } else if (item[0] === "#") {
    }
  });
  return domStr;
}
