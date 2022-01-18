import Scanner from "./Scanner.js";

window.templateEngine = {
  render(template, data) {
    let scanner = new Scanner(template);
    while (!scanner.eos()) {
      let words = scanner.sncaUtil("{{");
      console.log(words);
      scanner.scan("{{");
      let name = scanner.sncaUtil("}}");
      console.log(name);
      scanner.scan("}}");
    }
  },
};
