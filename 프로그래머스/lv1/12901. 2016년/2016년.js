function solution(a, b) {
  const answer = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date();
  date.setFullYear(2016, a - 1, b);
  return answer[date.getDay()];
}