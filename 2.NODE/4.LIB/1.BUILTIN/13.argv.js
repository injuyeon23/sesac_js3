// process.argv는 “터미널에서 입력한 값(인자)”을 배열로 가져오고, slice(2)는 그중 앞의 Node 관련 2개를 버리고 진짜 사용자 입력만 가져오는 것임.

// const args = process.argv;
const args = process.argv.slice(2); // 리스트에서 앞에 2개 인자 없애라
// process.argv란? Node.js가 기본으로 제공하는 배열. 
// node app.js 10 20 30
// 앞에 0, 1번은 Node가 자동으로 넣는 "쓸모없는 값"이라서 우리는 2번부터 필요함.

console.log(args); // args 콘솔 확인
console.log('사용자수: ', args[0]); // args[0] → 첫 번째 입력
console.log('상점수: ', args[1]);
console.log('주문수: ', args[2]);

console.log('당신은 사용자수를 몇명으로 생성하시겠습니까?');