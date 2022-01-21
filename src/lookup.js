/**
 * 此函数功能是，在dataObj对象中，寻找用连续点符号的keyName属性
 */

export default function lookup(dataObj, keyNmae) {
  let result = dataObj;
  let keyArr = keyNmae.split(".");
  keyArr.forEach((item) => {
    result = result[item];
  });
  return result;
}
