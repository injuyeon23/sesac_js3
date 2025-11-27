function sum_to_number(max) {
    let sum = 0; 
    for (let i = 1; i <= max; i++) {
        sum = sum + i; // i는 for 안에서만 사용 
    }
    console.log(`1부터 ${max}까지의 합은: ${sum}`);
}

console.time("sum-to-100");
sum_to_number(100);
console.timeEnd("sum-to-100");

console.time("sum-to-1000");
sum_to_number(1_000);
console.timeEnd("sum-to-1000");

// sum_to_number(100);
// sum_to_number(1_000);

function sum_to_number_guess(max) {
    sum = {max * (max + 1) / 2;
        z
    }
}

console.time("sum-to-100억");
sum_to_number(1_00_000_000_000);
console.timeEnd("sum-to-100억");