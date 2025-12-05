// CRM(고객 정보)용 랜덤 데이터 생성기의 기본 형태야.
// 이름, 성별, 생년월일을 랜덤으로 만드는 기능들이 각각 함수로 분리


const names = [ // 이름 배열 
  "서준",
  "민준",
  "도윤",
  "시우",
  "예준",
  "하준",
  "지호",
  "주원",
  "지후",
  "도현",
  "준우",
  "준서",
  "건우",
  "우진",
  "현우",
  "선우",
  "지훈",
  "유준",
  "은우",
  "연우",
  "서진",
  "이준",
  "시윤",
  "민재",
  "현준",
  "정우",
  "윤우",
  "수호",
  "지우",
  "승우",
  "유찬",
  "지환",
  "이안",
  "승현",
  "준혁",
  "시후",
  "진우",
  "승민",
  "민성",
  "수현",
  "지원",
  "준영",
  "시현",
  "재윤",
  "은호",
  "우주",
  "지한",
  "태윤",
  "한결",
  "지안",
  "시온",
  "서우",
  "윤호",
  "시원",
  "은찬",
  "민우",
  "재원",
  "동현",
  "이현",
  "하진",
  "민규",
  "우빈",
  "민찬",
  "재민",
  "율",
  "로운",
  "하율",
  "도하",
  "지율",
  "준호",
  "윤재",
  "준",
  "태민",
  "성민",
  "재현",
  "지민",
  "하민",
  "민호",
  "승준",
  "현서",
  "성현",
  "예성",
  "하람",
  "태오",
  "지성",
  "태현",
  "이든",
  "규민",
  "태양",
  "민혁",
  "다온",
  "성준",
  "윤성",
  "정민",
  "도훈",
  "주안",
  "은성",
  "예찬",
  "지오",
  "주호"
];

function generateName() { // 랜덤 이름 생성 
    const index = Math.floor(Math.random() * names.length); 
    // ✔ Math.random() * names.length→ 0 이상 ~ (이름 개수) 미만의 실수
    // Math.floor()→ 소수점 버리고 정수로 변환
    // console.log(index);
    return names[index];
}

function generateGender() { // 랜덤 성별 생성 
    const prob = Math.random(); 
    if (prob < 0.5) { // // ==> 50% 확률로 여성 or 남성 
        return "남성";
    } else {
        return "여성";
    }
}

function generateGender2() { 
    return Math.random() < 0.5 ? "남성" : "여성"
}

function generateBirthdate() { // 랜덤 생일 생성 
    // const year = Math.floor(Math.random() * 100); // 0 ~ 99
    const year = Math.floor(Math.random() * 40) + 1980; // 1980 ~ 2019
    // Math.random() * 40 → 0~39, 1980 → 1980~2019
    // const month = Math.floor(Math.random() * 12); // 0 ~ 11
    const month = Math.floor(Math.random() * 12) + 1; // 1 ~ 12
    // Math.random() * 12 → 0~11, 1 → 1~12 (정상적인 월)
    // const day = Math.floor(Math.random() * 30); // 0 ~ 29
    const day = Math.floor(Math.random() * 28) + 1; // 1 ~ 28

    return `${year}-${month}-${day}`
}

console.log(generateName());
console.log(generateGender2());
console.log(generateBirthdate());