/*
3. Người ta định nghĩa số vòng là một số tự nhiên mà mà chữ số đầu trùng với chữ số cuối của nó. Ví dụ 303, 101, 8, 88 là những số vòng. 
Cho 2 số nguyên dương L, R, hãy đếm số số vòng trong đoạn [L; R] 
Ví Dụ: 
Với L = 9, R = 13 thì circlenum(L,R) = 2.  Trong đoạn [9; 13] có 2 số vòng là 9 và 11 
[Đầu vào] L,R 1 <= L <= R <= 10^18 
[Đầu ra] Số lượng số vòng trong đoạn [L; R] 
*/

// SOLUTION 2
function findFirstElementOfNumber(a){
	const output = Math.floor(a / 10)
	
	if (output === 0) return a
	if (output >= 10) return findFirstElementOfNumber(output)
	return output
}

function isCirclenum(a) {
	const first = findFirstElementOfNumber(a)
	const last = a % 10

	return first === last
}

function circlenum(l, r) {
	let count = 0
	for (let i = l; i <= r; i++) {
		if (isCirclenum(i)) {
			count++
		}
	}

	return count
}

const L = 9
const R = 103
console.log(circlenum(L, R))