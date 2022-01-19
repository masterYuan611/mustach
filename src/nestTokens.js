/*
  函数的功能是折叠tokens，将#和/之间的tokens整合起来
*/
export default function nestTokens(tokens) {
    let nestedTokens = []; // 结果数组
    let sections = []; // 栈结构
    let collector = nestedTokens; // 收集器
    tokens.forEach((item)=>{
        switch(item[0]){
            case '#':
                collector.push(item);
                sections.push(item);
                collector = item[2] = [];
                break;
            case '/':
                sections.pop();
                collector = sections.length > 0 ? sections[sections.length-1][2] : nestedTokens;
                break;
            default:
                collector.push(item);
        }
    });
    return nestedTokens;
 }