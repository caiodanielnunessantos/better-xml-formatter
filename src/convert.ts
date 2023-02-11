import { XMLJSElement } from "./xmlobj";
import { xml2js } from 'xml-js';

const config = {
  attributesKey: 'attributes',
  textKey: 'text',
  nameKey: 'tag',
  elementsKey: 'children',
};

export function getJSONFromXML(xmlString: string): any {
  const parsed: any = xml2js(xmlString, config);
  return parsed['children'];
}