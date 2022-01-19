import Scanner from "./Scanner.js";
import nestTokens from "./nestTokens.js";

window.templateEngine = {
  render(template, data) {
    let tokens = [];
    let words;
    let scanner = new Scanner(template);
    while (!scanner.eos()) {
      words = scanner.sncaUtil("{{");
      if(words) {
        tokens.push(["text", words]);
      }
      scanner.scan("{{");
      words = scanner.sncaUtil("}}");
      if(words) {
        if(words[0] === '#') {
          tokens.push(["#", words.substring(1)]);
        } else if (words[0] === '/') {
          tokens.push(["/", words.substring(1)]);
        } else {
          tokens.push(["name", words]);
        }
      }
      scanner.scan("}}");
    }
    console.log("tokens数组",tokens);
    // console.log(nestTokens(tokens));
  },
};
