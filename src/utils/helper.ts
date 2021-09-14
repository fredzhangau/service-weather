export function getValue(dataSet: any, contentKey: string[]) {
  let element = dataSet;
  contentKey.forEach((key) => {
    element = element[key];
  });
  return element;
}
