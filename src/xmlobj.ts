export interface XMLJSElement {
  text?: string,
  tag?: string,
  attributes?: Record<string, string>,
  children?: XMLJSElement[],
}