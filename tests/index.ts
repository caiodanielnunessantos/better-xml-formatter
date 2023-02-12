require('./indentOneLevel');
require('./onelineformatter');
require('./tagformatter');
require('./recursiveformatter');
require('./scratches');

import { readFileSync, writeFileSync } from "fs";
import { formatXMLString } from "../src";
//formatXMLString('', { tabSize: 3 });
//writeFileSync('./b.xmlaasdfa', formatXMLString(readFileSync('./a.xmlaasdfa').toString()));
