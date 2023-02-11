import { formatter } from "../src/recursiveformatter";

const obj = {
  tag: 'book',
  attributes: {
    name: 'Bíblia',
    autor: 'Deus',
    maisum: 'ijiosdjfopasidfjp',
    outrinho: 'jiopjopjpjopjp'
  },
  children: [
    { text: 'oi' },
    { tag: 'a', children: [{ text: 'jjs adfa sadf sdaf adsf sdf sdaf adsf sadfas f asfsdf dsf d df ds asdf sdf sfdasi' }] }
  ]
};

//console.log(formatter(obj, '       ', 80));