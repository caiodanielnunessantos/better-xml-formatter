import { formatter } from "./recursiveformatter";
import { getJSONFromXML } from './convert';
export interface XMLFormatterSettings {
  tabSize: number,
  lineWidth: number,
}

export const defaultXMLFormatterSettings: XMLFormatterSettings = {
  tabSize: 2,
  lineWidth: 80,
};

export function formatXMLString(input: string, settings: XMLFormatterSettings = defaultXMLFormatterSettings): string {
  return formatter(getJSONFromXML(input), ' '.repeat(settings.tabSize), settings.lineWidth);
}
