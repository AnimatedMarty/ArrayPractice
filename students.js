var students = [
  {name: 'Mary', track: 'Ruby', achievements: 6, points: 87},
  {name: 'Derrick', track: 'Mac OS', achievements: 12, points: 1067},
  {name: 'Terry', track: 'CSS', achievements: 5, points: 32},
  {name: 'Andre', track: 'Sound Design', achievements: 13, points: 1345},
  {name: 'Tabitha', track: 'Animation', achievements: 18, points: 2312}
];

for (var record in students) {
 console.log(record, ': ', students[record]); 
}
