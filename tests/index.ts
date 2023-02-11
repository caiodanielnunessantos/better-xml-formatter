require('./reflowText');
require('./indentOneLevel');
require('./onelineformatter');
require('./tagformatter');
require('./recursiveformatter');

import { readFileSync } from "fs";
import { formatXMLString } from "../src";

//console.log(formatXMLString(readFileSync('./a.xml').toString()));