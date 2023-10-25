export function capitalize(str: string) {
  if (!str) return;
  const stringArr: string[] = str.split(" ");
  let res: string = "";

  for (let temp of stringArr) {
    temp = temp[0].toUpperCase() + temp.slice(1);
    res = res + temp + " ";
  }
  return res.trimEnd();
}
