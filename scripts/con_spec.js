function (c,a) {

// Dairy Boys
//   _______
//  |_______|
// /_______/_\
// |       |m|
// | DAIRY |i|
// | BOYS  |l|
// | (y)   |k|
// |_______|/
//
// written by: pobega
//
// This script is the answer to the wolf's CON_SPEC response.
// Pass it as a scriptor to CON_SPEC to pass the lock.
//

    var count = 0,
        string = a.s,
        digit = a.d
    // Count the occurences of a digit in a string
    for ( var i=0; i < string.length; i++ ) {
        if (string[i] == digit)
            count++
    }
    return count
}