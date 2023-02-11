import { lengthNodeOneLine } from "./onelineformatter";
import { XMLJSElement } from "./xmlobj";

export function elementCanBeOneLine(element: XMLJSElement, maxLineWidth: number): boolean {
  const length = lengthNodeOneLine(element);
  return length <= maxLineWidth;
}
