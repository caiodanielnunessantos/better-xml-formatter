import assert from "assert";
import { formatNodeOneLine } from "../src/onelineformatter";

assert(formatNodeOneLine(null) === '');
assert(formatNodeOneLine({}) === '');
assert(formatNodeOneLine([]) === '');
assert(formatNodeOneLine({ text: '' }) === '');
assert(formatNodeOneLine({ text: 'fds' }) === 'fds');
assert(formatNodeOneLine({ text: ' jsadiofjo    jfiodsa jo  dfsioaj iadfs ' }) === 'jsadiofjo jfiodsa jo dfsioaj iadfs');
assert(formatNodeOneLine({ text: ' jsadiofjo    jfiodsa jo  dfsioaj iadfs ' }) !== ' jsadiofjo jfiodsa jo dfsioaj iadfs');
assert(formatNodeOneLine({ tag: 'saf' }) === '<saf />');
assert(formatNodeOneLine({ tag: 'saf', attributes: { aaa: 'joip', jio: 'jiopj' } }) === '<saf aaa="joip" jio="jiopj" />');
assert(formatNodeOneLine({ tag: 'sewraf', attributes: { aaa: 'joip', jio: 'jiopj' }, children: [{ text: 'fsdjio' }] }) === '<sewraf aaa="joip" jio="jiopj">fsdjio</sewraf>');