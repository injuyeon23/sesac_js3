function leftTriangle(num_of_rows) { 
    for (let row = 1; row <= num_of_rows; row++) { //줄에 관해서 계속 늘리는 식 
        let stars = ""; // 매 줄마다 새로운 빈 상자가 필요,  줄이 바뀌면 다시 빈 상태로 초기화!
        for (let col = 1; col <= row; col++) { // col <- row: col이 row에 도달할 때까지 반복
            stars += "*";
        }
        console.log(stars);
    }
}

// for (초기값; 조건; 증가식)




// leftTriangle(5);


function rightTriangle(num_of_rows) {
    for (let row = 1; row <= num_of_rows; row++) {
        let stars = ""; // num_of_rows 수만큼 줄을 만듦 
        for (let col = 1; col <= num_of_rows - row; col++) {
            stars += " "; // 공백을 만들어주기 
        }
        for (let col = 1; col <= row; col++) {
            stars += "*";
        }
        console.log(stars)
    }
}
rightTriangle(5); 


function leftTriangle_repeat(num_of_rows) {
    for (let r = 1; r <= num_of_rows; r++)
    console.log("*".repeat(r))
}

function rightTriangle_repeat(num_of_rows) {
    for (let row = 1; r <= num_of_rows; r++) {
        console.log(" ".repeat(num_of_rows - row)+ "*".repeat(row))
    }
}

// leftTriangle_repeat(5);
// rightTriangle_repeat(5);