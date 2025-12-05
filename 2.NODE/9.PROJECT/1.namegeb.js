// 성(lastnames)과 이름(firstnames) 리스트 중 하나씩 랜덤으로 뽑아서 조합해주는 클래스.
class NameGenerator { 
    constructor() { // 클래스를 new NameGenerator()로 만들면 constructor 안의 코드가 자동으로 실행됨.
        this.lastnames = ['김', '이', '박']; // 성리스트 
        this.firstname = ['서준', '민준', '지윤']; //이름리스트 
        // 이 두 배열을 객체 속성으로 저장한 것.
    }

    pickRandom(arr) { // 배열에서 랜덤으로 하나를 선택해주는 함수.
        return arr[Math.floor(Math.random() * arr.length)]
        // ㄴ → 0부터 배열 길이-1까지 중에서 “랜덤 인덱스 번호”를 하나 뽑는 과정
        // arr.length (여기선 3) 0, 1, 2 중 하나를 랜덤으로 뽑아야 해

        // Math.random() → 0~1 사이 랜덤 숫자
        // arr.length * Math.random() → 랜덤 인덱스
        // Math.floor() → 정수로 만들기
        // arr[랜덤 번호] → 배열에서 하나 꺼내기
    }

    generateName() { // 이게 진짜 이름 생성 기능.
        const lastname = this.pickRandom(this.lastnames); /// 성 리스트에서 하나 랜덤 Pick
        const firstname = this.pickRandom(this.firstname); // 이름 리스트에서 하나 랜덤 Pick
        return lastname + firstname;
    }
}

const gen = new NameGenerator();

console.log(gen.generateName());

// 랜덤 나이 생성 랜덤 이메일 생성 랜덤 주소 생성 랜덤 전체 유저 데이터 생성 이런 "데이터 생성기"를 직접 만들 수 있다! 

// Math.random()   → 0.0 ~ 1.0 랜덤 숫자
//       │
//       ├─ multiply by arr.length  (ex: 3)
//       ▼
// 0 ~ 3 사이 랜덤 실수  (ex: 1.82)
//       │
//       ├─ Math.floor()
//       ▼
// 0, 1, 2 중 하나의 정수
//       │
//       ▼
// arr[그 정수]  → 배열에서 랜덤 요소