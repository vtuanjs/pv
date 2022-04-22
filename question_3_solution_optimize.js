/*
3. Người ta định nghĩa số vòng là một số tự nhiên mà mà chữ số đầu trùng với chữ số cuối của nó. Ví dụ 303, 101, 8, 88 là những số vòng. 
Cho 2 số nguyên dương L, R, hãy đếm số số vòng trong đoạn [L; R] 
Ví Dụ: 
Với L = 9, R = 13 thì circlenum(L,R) = 2.  Trong đoạn [9; 13] có 2 số vòng là 9 và 11 
[Đầu vào] L,R 1 <= L <= R <= 10^18 
[Đầu ra] Số lượng số vòng trong đoạn [L; R] 
*/

// Comment line dưới đây để không hiển thị phần debug log
// Lưu ý: Nếu bạn dùng vscode, phần log hiển thị khi xử lý số >=10^16 sẽ không chính xác.
// Đừng bận tâm về nó, vì số count vẫn đúng!
// console.debug = function() {};

// SUPER FAST SOLUTIOp
function circlenum(l, r) {
	let count = 0
	let temp = l
	let exponent = 1
	let loop = 1 // Loop sẽ có giá trị từ 1 -> 9
	do {
		// Nếu số đó có 1 chữ số. Số đó chắc chắn là Số vòng
		if (temp < 10) {
			count++
			console.debug(temp)
			temp++
			continue
		}

		if (temp === 10) {
			temp++
			continue
		}

		if (loop <= 9) {
			// baseNumber chính là các số có giá trị: 11, 101, 1001, 10001, 100001
			// Khi ta nhân baseNumber với các số từ 1 -> 9, ta sẽ một số vòng.
			// VD: baseNumber là 11 -> các số vòng sẽ là 22, 33, 44, 55, 66, 77, 88, 99
			const baseNumber = 1 + Math.pow(10, exponent)
			temp = baseNumber * loop
			if (temp <= r) {
				count++
				console.debug(temp)
				loop++
				continue
			} else {
				break
			}
		}

		// Nếu loop vượt qua 9, ta reset nó thành 1, đồng thời nâng số mũ lên 1
		loop = 1
		exponent++
	} while (temp <= r)

	return count
}

const L = 9
const R = Math.pow(10, 18)
console.log(circlenum(L, R))
