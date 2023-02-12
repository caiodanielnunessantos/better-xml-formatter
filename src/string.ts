export function indentOneLevel(content: string, step: number): string {
  return content
    .split('\n')
    .filter((line: string) => line)
    .map((line: string) => `${' '.repeat(step)}${line}`)
    .join('\n');
}
