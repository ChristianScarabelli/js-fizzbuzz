/* 
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//avvio il loop di 100 iterazioni
for (let i = 0; i < 100; i++) {
    // console.log(i)

    // stampo i numeri da 1 a 100
    const num = i + 1  
    // console.log(num)  //number

    // stampo i numeri multipli di 3
    const double3 = num % 3
    
    if (double3 === 0) {
        console.log(num) // num è multiplo di 3
    }

    // stampo i numeri multipli di 5
    const double5 = num % 5

    if (double5 === 0) {
        console.log(num) // num è multiplo di 5
    }
}

