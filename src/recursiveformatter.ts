import { elementCanBeOneLine } from "./inlineelement";
import { formatNodeOneLine } from "./onelineformatter";
import { indentOneLevel } from "./string";
import { formatClosingTagElement, formatOpeningTagElementAll, formatSelfClosingTagElementAll } from "./tagformatter";
import { XMLJSElement } from "./xmlobj";

export function formatter(element: XMLJSElement | XMLJSElement[], indentation: string, maxLineWidth: number): string {
  if (Array.isArray(element)) return formatCollection(element, indentation, maxLineWidth);
  else return formatElement(element, indentation, maxLineWidth);
}

function formatParentElement(element: XMLJSElement, indentation: string, maxLineWidth: number): string {
  return `${formatOpeningTagElementAll(element, indentation, maxLineWidth)}
${indentOneLevel(formatter(element.children || {}, indentation, maxLineWidth - indentation.length), indentation.length)}
${formatClosingTagElement(element)}
`;
}

function formatAloneElement(element: XMLJSElement, indentation: string, maxLineWidth: number): string {
  return formatSelfClosingTagElementAll(element, indentation, maxLineWidth);
}

function formatElement(element: XMLJSElement, indentation: string, maxLineWidth: number): string {
  if (element.tag && element.children) {
    return formatParentElement(element, indentation, maxLineWidth);
  } else if (element.tag && !element.children) {
    return formatAloneElement(element, indentation, maxLineWidth);
  }
  return '';
}

function formatCollection(elements: XMLJSElement[], indentation: string, maxLineWidth: number): string {
  let wordBucket: string[] = [];
  let output = '';
  function drainBucket() {
    wordBucket.forEach((word) => {
      if (!output || output[output.length - 1] === '\n') {
        output += word;
      } else if (output.length - output.lastIndexOf('\n') + word.length + 1 > maxLineWidth) {
        output += '\n';
        output += word;
      } else {
        output += ' ';
        output += word;
      }
    });
    wordBucket = [];
  }
  elements.forEach((element) => {
    if (element.tag && elementCanBeOneLine(element, maxLineWidth)) {
      wordBucket.push(formatNodeOneLine(element));
    } else if (element.text) {
      element.text.split(/\s+/g).filter((word) => word).forEach((word) => wordBucket.push(word));
    } else if (element.tag && element.children) {
      drainBucket();
      output += '\n';
      output += formatElement(element, indentation, maxLineWidth);
    }
  });
  drainBucket();
  return output;
}
