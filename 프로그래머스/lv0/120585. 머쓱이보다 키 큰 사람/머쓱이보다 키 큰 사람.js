function solution(array, height) {
  return array.filter(tall => height < tall).length;
}