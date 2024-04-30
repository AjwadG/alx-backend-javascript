export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, elemnt) => sum + elemnt.id, 0);
  }
  return 0;
}
