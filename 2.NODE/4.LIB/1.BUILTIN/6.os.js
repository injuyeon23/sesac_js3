// os 모듈은 “내 컴퓨터의 상태나 정보”를 알려주는 Node.js 내장 도구임

const os = require('os');
// Node.js에게 말하는 것: “내 컴퓨터 정보를 가져오는 도구(os)를 불러올게!”
// os = operating system = 운영체제

const hostname = os.hostname(); // 내 컴퓨터의 고유한 이름을 가져옴.
console.log('내PC의 호스트이름은: ', hostname);

const tmpDir = os.tmpdir(); // Mac이나 Windows는 내부적으로 임시 파일을 저장하는 전용 폴더가 있음. Node.js는 그 위치를 알려줌.
console.log('내PC의 OS에서 사용하는 임시디렉토리는: ', tmpDir);

const cpus = os.cpus(); // cpus() = CPU(중앙처리장치) 정보 전체 반환이 결과는 CPU 코어 각각의 정보가 배열로 들어있음.
console.log('내PC의 CPU들의 코어 갯수는: ', cpus.length);
console.log('내PC의 CPU의 첫번째 코어 정보: ', cpus[0]); // CPU 배열의 첫 번째 요소를 출력 → 첫 번째 코어 정보.

const platform = os.platform(); // platform() → 운영체제 종류: darwin (Mac) win32 (Windows) linux (Linux)
const version = os.version(); // 더 자세한 OS 버전
const release = os.release(); // 커널(운영체제 핵심)의 릴리즈 번호
console.log(`내PC의 운영체제는: ${platform}, 버전은 ${version}, 릴리즈는 ${release}`);