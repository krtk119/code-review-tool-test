export function calc(x: number, y: number, z: string): number {
  let a = 0;
  if (z === "p") {
    a = x * y;
  } else if (z === "m") {
    a = x - y;
  } else {
    a = x + y;
  }
  return a;
}

export function proc(data: number[]): number[] {
  const d = [];
  for (let i = 0; i < data.length; i++) {
    d.push(data[i] * 2);
  }
  return d;
}
