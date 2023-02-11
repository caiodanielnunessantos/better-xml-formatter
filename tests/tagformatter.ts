import {
  formatSelfClosingTagElement,
  formatSelfClosingTagElementBreaked,
  formatOpeningTagElement,
  formatOpeningTagElementBreaked,
  formatClosingTagElement
} from "../src/tagformatter";

const element = {
  tag: 'jiopjds',
  attributes: {
    sadfjiopjadfs: 'ijopjpoij',
    jiojpjoipj: 'jopijpoij',
    iojoifpdsj: 'ijopjiopj',
  }, children: [
    { text: 'jiopji' },
    { tag: 'a' },
    { tag: 'a', attributes: { asdf: 'jiopj' } },
  ],
}

/*
console.log(formatSelfClosingTagElement(element));
console.log(formatSelfClosingTagElementBreaked(element, '    '));
console.log(formatOpeningTagElement(element));
console.log(formatOpeningTagElementBreaked(element, '    '));
console.log(formatClosingTagElement(element));
*/