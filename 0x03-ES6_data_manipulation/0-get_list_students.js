function make(id, firstName, location) {
  return { id, firstName, location };
}

export default function getListStudents() {
  return [
    make(1, 'Guillaume', 'San Francisco'),
    make(2, 'James', 'Columbia'),
    make(5, 'Serena', 'San Francisco'),
  ];
}
