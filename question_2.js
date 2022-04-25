/*
2. Cho dãy số gồm n số nguyên a1, a2, …, an. Tìm giá trị lớn nhất của hàm f(i, j, k) = ai + 2×aj + 3×ak với 1≤ i < j < k ≤ n. 
Ví dụ: 
với a = [-1, 2, -2, -3, 5] thì threenumbers(a) = 18. giải thích: f(1, 2, 5)= -1 + 2×2 + 3×5 = 18 là lớn nhất. 
[Đầu vào] mảng 3 ≤ a.length ≤ 10^5 và |ai| ≤ 10^9 
[Đầu ra] giá trị lớn nhất của hàm f(i, j, k) tìm được. 
*/

// Comment line dưới để tắt tính năng debug
// console.debug = function() {};

function threenumbers(a){
	let ai = a[0]
	let aj = a[1]
	let ak = a[2]

	let aiIndex = 0
	let ajIndex = 0
	let akIndex = 0

	let maxSizeOfSearchAk = a.length - 1
	for (let k = 0; k <= maxSizeOfSearchAk; k ++) {
		if (a[k] >= ak) {
			akIndex = k
			ak = a[k]
		}
	}

	let maxSizeOfSearchAj = maxSizeOfSearchAk - 1
	for (let j = 0; j <= maxSizeOfSearchAj; j ++) {
		if (a[j] >= aj && a[j] < ak) {
			ajIndex = j
			aj = a[j]
		}
	}

	let maxSizeOfSearchAi = maxSizeOfSearchAj - 1
	for (let i = 0; i <= maxSizeOfSearchAi; i ++) {
		if (a[i] >= ai && a[i] < aj) {
			aiIndex = i
			ai = a[i]
		}
	}

	console.debug("ai: ", ai)
	console.debug("aj: ", aj)
	console.debug("ak: ", ak)

	return ai + (2 * aj) + (3 * ak)
}

const A = [-1, 2, -2, -3, 5, 6, -3, 1, 4, 7]
console.log(threenumbers(A))
