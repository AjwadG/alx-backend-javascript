export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  for (let i = 0; i < int8View.length; i += 1) {
    int8View[i] = 0;
  }
  int8View[position] = value;
  if (int8View[position] === undefined) throw new Error('Position outside range');
  return new DataView(buffer);
}
