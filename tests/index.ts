require('./reflowText');
require('./indentOneLevel');
require('./onelineformatter');
require('./tagformatter');
require('./recursiveformatter');

import { readFileSync, writeFileSync } from "fs";
import { formatXMLString } from "../src";
writeFileSync('./b.xmlaasdfa', formatXMLString(readFileSync('./a.xmlaasdfa').toString()));
//console.log(formatXMLString(readFileSync('./a.xml').toString()));