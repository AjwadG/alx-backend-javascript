export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((elemnt) => elemnt.location === city);
  }
  return [];
}
