import { formatter } from "./recursiveformatter";
import { getJSONFromXML } from './convert';

export function formatXMLString(input: string, tabSize: number, lineWidth: number): string {
  try {
    return formatter(getJSONFromXML(input), ' '.repeat(tabSize), lineWidth);
  } catch (er) {
    return input;
  }
}
