export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  let answer = '';
  for (const val of set) {
    if (typeof val === 'string' && val.indexOf(startString) === 0) answer = `${answer}-${val.slice(startString.length)}`;
  }
  return answer.slice(1);
}
