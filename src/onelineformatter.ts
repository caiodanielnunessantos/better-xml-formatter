import { XMLJSElement } from "./xmlobj";

export function formatTextOneLine(element: XMLJSElement): string {
  return element.text && element
    .text
    .split(/\s+/g)
    .filter((word: string) => word)
    .join(' ') || '';
}

export function lengthTextOneLine(element: XMLJSElement): number {
  return formatTextOneLine(element).length;
}

function formatSelfClosingTagElementOneLine(element: XMLJSElement): string {
  return `<${element.tag}${Object.entries(
    element.attributes || {}
  ).map(([key, value]) => ` ${key}="${value}"`).join('')} />`;
}

function lengthSelfClosingTagElementOneLine(element: XMLJSElement): number {
  return formatSelfClosingTagElementOneLine(element).length;
}

function formatParentTagElementOneLine(element: XMLJSElement): string {
  return `<${element.tag}${Object.entries(
    element.attributes || {}
  ).map(([key, value]) => ` ${key}="${value}"`).join('')}>${(
    element.children || []
  ).map((element) => 
    formatNodeOneLine(element)
  ).join('')}</${element.tag}>`;
}

function lengthParentTagElementOneLine(element: XMLJSElement): number {
  return formatParentTagElementOneLine(element).length;
}

export function formatTagElementOneLine(element: XMLJSElement): string {
  if (element.tag) {
    if (element.children) {
      return formatParentTagElementOneLine(element);
    } else {
      return formatSelfClosingTagElementOneLine(element);
    }
  }
  return '';
}

export function lengthTagElementOneLine(element: XMLJSElement): number {
  return formatTagElementOneLine(element).length;
}

function formatElementOneLine(element: XMLJSElement): string {
  if (element.text) {
    return formatTextOneLine(element);
  } else if (element.tag) {
    return formatTagElementOneLine(element);
  }
  return '';
}

function lengthElementOneLine(element: XMLJSElement): number {
  return formatElementOneLine(element).length;
}

export function formatNodeOneLine(element: XMLJSElement[] | XMLJSElement | null): string {
  if (element) {
    if (Array.isArray(element)) {
      return element.map((element) => formatElementOneLine(element)).join('');
    } else {
      return formatElementOneLine(element);
    }
  }
  return '';
}

export function lengthNodeOneLine(element: XMLJSElement): number {
  return formatNodeOneLine(element).length;
}