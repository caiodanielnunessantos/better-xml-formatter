/*export interface XMLJSTextElement {
  text: string,
}

export interface XMLJSTagElement {
  tag: string,
  attributes?: Record<string, string>,
  children?: XMLJSElement[],
}

export type XMLJSElement = XMLJSTextElement | XMLJSTagElement;
export type XMLJSCollection = XMLJSElement[];
export type XMLJSNode = XMLJSElement | XMLJSCollection | null;
*/
export interface XMLJSElement {
  text?: string,
  tag?: string,
  attributes?: Record<string, string>,
  children?: XMLJSElement[],
}