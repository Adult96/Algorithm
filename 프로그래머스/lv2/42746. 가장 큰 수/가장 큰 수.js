function solution(nums = [0, 0, 0, 0]) {
  const answer = nums
    .sort((a, b) => {
      //두 값을 더하고 문자열로 변환후 두값을 String 내장 함수인 localeCompare로 비교함 사전식에 따라 결과값이 1,-1 로 나옴
      const order1 = '' + a + b;
      const order2 = '' + b + a;
      return order2.localeCompare(order1);
    })
    .join('');

  return answer[0] === '0' ? '0' : answer;
}