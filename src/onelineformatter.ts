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
  return element.tag && element.tag.length || 0
    + Object
      .entries(element.attributes || {})
      .map(([key, value]) => key.length + value.length + 3)
      .reduce((a, b) => a + b, 0)
    + 4;
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
  return (element.tag && element.tag.length || 0) * 2
    + Object
      .entries(element.attributes || {})
      .map(([key, value]) => key.length + value.length + 3)
      .reduce((a, b) => a + b, 0)
    + (element.children || [])
      .map((element) => lengthNodeOneLine(element))
      .reduce((a, b) => a + b, 0)
    + 5;
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
  if (element.tag) {
    if (element.children) {
      return lengthParentTagElementOneLine(element);
    } else {
      return lengthSelfClosingTagElementOneLine(element);
    }
  }
  return 0;
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
  if (element.text) {
    return formatTextOneLine(element).length;
  } else if (element.tag) {
    return lengthTagElementOneLine(element);
  }
  return 0;
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
  if (element) {
    if (Array.isArray(element)) {
      return element
        .map((element) => lengthElementOneLine(element))
        .reduce((a, b) => a + b, 0);
    } else {
      return lengthElementOneLine(element);
    }
  } else {
    return 0;
  }
}