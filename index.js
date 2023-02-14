
// First Task :

let m = 3;


function dotProduct(vect_A, vect_B) {
  let product = 0;


  for (let i = 0; i < m; i++) product = product + vect_A[i] * vect_B[i];
  return product;
}


function crossProduct(vect_A, vect_B, cross_P) {
  cross_P[0] = vect_A[1] * vect_B[2] - vect_A[2] * vect_B[1];
  cross_P[1] = vect_A[2] * vect_B[0] - vect_A[0] * vect_B[2];
  cross_P[2] = vect_A[0] * vect_B[1] - vect_A[1] * vect_B[0];
}


let vect_A = [3, -5, 4];
let vect_B = [2, 6, 5];
let cross_P = [];


document.write("Dot product:");
document.write(dotProduct(vect_A, vect_B) + "<br/>");


document.write("Cross product:");
crossProduct(vect_A, vect_B, cross_P);


for (let i = 0; i < m; i++) {document.write(cross_P[i] + " ");}



//_______________________________________________##_______________________________________________________________________________//


// Second Task:

function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

	
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}


function printArray(arr, n)
{
	let i;
	for (i = 0; i < n; i++)
		document.write(arr[i] + " ");
	document.write("<br>");
}


	let arr = [12, 11, 13, 5, 6 ];
	let n = arr.length;

	console.log(insertionSort(arr, n));
	printArray(arr, n);
	






