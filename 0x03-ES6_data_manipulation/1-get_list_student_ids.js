export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((elemnt) => elemnt.id);
  }
  return [];
}
