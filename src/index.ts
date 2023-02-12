import { formatter } from "./recursiveformatter";
import { getJSONFromXML } from './convert';

interface ReturnWithMessage {
  formatted?: string,
  message: string,
}

export function formatXMLString(input: string, tabSize: number, lineWidth: number): ReturnWithMessage {
  try {
    const formatted = formatter(getJSONFromXML(input), ' '.repeat(tabSize), lineWidth);
    return ({ formatted, message: 'ok' });
  } catch (er) {
    return ({ message: `${er}` });
  }
}
