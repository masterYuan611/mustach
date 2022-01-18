export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr;
    this.pos = 0;
    this.tail = templateStr;
  }

  // 功能弱，就是走过指定内容，没有返回值
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      // tag有多长，就让指针后移多少位
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // 让指针进行扫描，知道遇见指定内容结束，并且能够返回结束之前的内容
  sncaUtil(stopTag) {
    // 记录一下执行本方法pos的值
    const pos_backup = this.pos;
    while (this.tail.indexOf(stopTag) !== 0 && !this.eos()) {
      this.pos++;
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos);
  }

  eos() {
    return this.pos === this.templateStr.length;
  }
}
