/*
1. Có 2 mảng số integer A,B 
A=[1,2,3,4] 
B=[2,4,6,8] 
- Tim và in ra các số có trong A nhưng ko có trong B và ngược lại VD: [1,3], [6,8] 
- Tim và in ra các số có trong cả A và B VD: [2,4] 
Input: mảng A, B có 1< length< 10^10 
Output: 
C:  mảng các sô có trong A nhưng ko có trong B 
D:  mảng các sô có trong B nhưng ko có trong A 
E:  mảng các sô có trong cả A,B 
*/

// Anwer C:
function findArrayIncludeAExcludeB(a, b){
	const output = [];

	const setB = new Set(b);
	// Complexity: O(n)
	for (const item of a) {
		// Complexity: O(1)
		if (!setB.has(item)) {
			output.push(item)
		}
	}

	return output
}

// Anwer D:
function findArrayIncludeBExcludeA(a, b){
	const output = [];

	const setA = new Set(a);
	for (const item of b) {
		if (!setA.has(item)) {
			output.push(item)
		}
	}

	return output
}

// Anwer E:
function findArrayIncludeAB(a, b){
	const output = [];

	const setB = new Set(b);
	for (const item of a) {
		if (setB.has(item)) {
			output.push(item)
		}
	}

	return output
}

const A = [1,2,3,4] 
const B = [2,4,6,8]

console.log("Answer C: Array include A, exclude B:\n", findArrayIncludeAExcludeB(A, B))
console.log("Answer D: Array include B, exclude A:\n", findArrayIncludeBExcludeA(A, B))
console.log("Answer E: Array include A and B:\n", findArrayIncludeAB(A, B))
