/*
2. Cho dãy số gồm n số nguyên a1, a2, …, an. Tìm giá trị lớn nhất của hàm f(i, j, k) = ai + 2×aj + 3×ak với 1≤ i < j < k ≤ n. 
Ví dụ: 
với a = [-1, 2, -2, -3, 5] thì threenumbers(a) = 18. giải thích: f(1, 2, 5)= -1 + 2×2 + 3×5 = 18 là lớn nhất. 
[Đầu vào] mảng 3 ≤ a.length ≤ 10^5 và |ai| ≤ 10^9 
[Đầu ra] giá trị lớn nhất của hàm f(i, j, k) tìm được. 
*/

function threenumbers(a){
	const sortDescending = a.sort((a, b ) => b - a)

	const i = sortDescending[2]
	const j = sortDescending[1]
	const k = sortDescending[0]

	return i + (2 * j) + (3 * k)
}

const A = [-1, 2, -2, -3, 5, 22, 1, 4]
console.log(threenumbers(A))
