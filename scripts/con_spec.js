function (context, args) { // T2 CON_SPEC passes in {s:"string", d:"digit"}

//
//   Author: Pobega
//   ▄▄▄▄▄▄▄ ▄  ▄▄  ▄▄▄▄   ▄▄▄▄▄▄▄
//   █ ▄▄▄ █ ▀▀█▄█▀█▄██▀▄▀ █ ▄▄▄ █
//   █ ███ █ ▄▄█▄ ▄█▄ ██   █ ███ █
//   █▄▄▄▄▄█ █ ▄▀▄ ▄▀▄ ▄ ▄ █▄▄▄▄▄█
//   ▄▄▄  ▄▄ █▄█▀▀▄█▀▀ ██▄▄▄▄▄  ▄▄
//   ▄▀ ▄█▄▄▀▄▀▀▄ ▀▀▄ ▀ █▀▄█▀▄▄▄▀█
//   █▀ █ █▄▄▄█ ▄▄█ ▄▄ ▀▀█▄█▀    ▄
//   █ ▄▀▀▀▄▄█ ▄ █▄▄ ██▄██ ▀█▄▄▀▀█
//   ▀ ▀█  ▄█ █▀▀▀▄█▀█  ▄  █▄▀▄  ▄
//   ▄▄█▀▀█▄▄▄▄▀▄ ▀▀▄▄▄▄▄▀▄██▄▀▀▀█
//   ▄▄█▄██▄▀ ▀▀▄▄█ ▄█ ▀▀████▄▄ ▄
//   ▄▄▄▄▄▄▄ ▀▄▄ █▄▄█▀ ▄ █ ▄ █▀▀ █
//   █ ▄▄▄ █ ▀▄█▀▀▄█▄▀ ▀▄█▄▄▄██ ▄▄
//   █ ███ █ ▄▀▄▄ ▀▀█▀▀▄▀ █ ▀█▀ ▄█
//   █▄▄▄▄▄█ █▄▀▄▄█  █ ▀ █▀▀█ █  ▄
//   http://github.com/Pobega/hackmud
//
// :::TRUST COMMUNICATION::: {security_level:4, length:132}
//
// This script is the answer to the wolf and up CON_SPEC response.
// Pass it as a scriptor to CON_SPEC to pass the lock.
//
// Ex: npc.loc{CON_SPEC:#s.user.con_spec}
//

    var count = 0,
        string = args.s,
        digit = args.d
    // Count the occurences of a digit in a string
    for ( var i=0; i < string.length; i++ ) {
        if (string[i] == digit)
            count++
    }
    return count
}
