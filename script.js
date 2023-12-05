 // A function that checks if the input/parameter is even


    function calEven (num){ 
     if (num % 2 === 0) { return `${num} is an even number`; } 
     else { return `${num} is not an even number`; };
     } console.log (calEven (2));


    //  A function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter

    function nameTwo (n1, n2) { 
        for (let n = n1; n<=n2; n++) { console.log(n); } 
    } nameTwo (5, 40);

    // A function that sum the values in-between two numbers.
    function add (start, end) {
        let sum = 0;   
        for (let i = start; i <= end; i++) {
        sum += i;
        }
        return sum;
        } let result = add (10, 30); console.log (result);