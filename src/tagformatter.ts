import { XMLJSElement } from "./xmlobj";

export function formatSelfClosingTagElement(element: XMLJSElement) {
  return `<${element.tag}${Object.entries(
    element.attributes || {}
  ).map(
    ([key, value]) => ` ${key}="${value}"`
  ).join('')} />`;
}

export function formatSelfClosingTagElementBreaked(element: XMLJSElement, indentation: string) {
  return `<${element.tag}\n${Object.entries(
    element.attributes || {}
  ).map(
    ([key, value]) => `${indentation}${key}="${value}"`
  ).join('\n')}\n/>`;
}

export function formatOpeningTagElement(element: XMLJSElement) {
  return `<${element.tag}${Object.entries(
    element.attributes || {}
  ).map(
    ([key, value]) => ` ${key}="${value}"`
  ).join('')}>`;
}

export function formatClosingTagElement(element: XMLJSElement) {
  return `</${element.tag}>`;
}

export function formatOpeningTagElementBreaked(element: XMLJSElement, indent: string) {
  return `<${element.tag}\n${Object.entries(
    element.attributes || {}
  ).map(
    ([key, value]) => `${indent}${key}="${value}"`
  ).join('\n')}\n>`;
}

export function formatSelfClosingTagElementAll(element: XMLJSElement, indentation: string, maxLineWidth: number): string {
  const oneLine = formatSelfClosingTagElement(element);
  if (oneLine.length > maxLineWidth) {
    return formatSelfClosingTagElementBreaked(element, indentation);
  } else {
    return oneLine;
  }
}
export function formatOpeningTagElementAll(element: XMLJSElement, indentation: string, maxLineWidth: number): string {
  const oneLine = formatOpeningTagElement(element);
  if (oneLine.length > maxLineWidth) {
    return formatOpeningTagElementBreaked(element, indentation);
  } else {
    return oneLine;
  }
}