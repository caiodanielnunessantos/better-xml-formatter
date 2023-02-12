import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { formatXMLString } from '../src';

readdirSync('./scratches/in').forEach(
  (fileName) => {
    const { formatted, message } = formatXMLString(readFileSync('./scratches/in/' + fileName).toString(), 2, 80);
    writeFileSync('./scratches/out/' + fileName, formatted || message);
  }
);