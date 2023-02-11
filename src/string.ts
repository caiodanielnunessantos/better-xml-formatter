export function indentOneLevel(content: string, step: number): string {
  return content
    .split('\n')
    .filter((line: string) => line)
    .map((line: string) => `${' '.repeat(step)}${line}`)
    .join('\n');
}

export function reflowText(text: string, maxWidth: number): string {
  return text
    .split(/\s+/g)
    .filter((word: string) => word)
    .reduce((previousValue: string[], currentValue: string): string[] => {
      if (!previousValue.length) {
        previousValue.push(currentValue);
        return previousValue;
      } else if (previousValue[previousValue.length - 1].length + currentValue.length + 1 > maxWidth) {
        previousValue.push(currentValue);
        return previousValue;
      } else {
        previousValue[previousValue.length - 1] = `${previousValue[previousValue.length - 1]} ${currentValue}`;
        return previousValue;
      }
    }, []).join('\n');
}
