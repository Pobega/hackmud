function (context, args) { // T2 CON_SPEC passes in {s:"string", d:"digit"}

//
//   Author: Pobega
//   ▄▄▄▄▄▄▄ ▄▄▄ ▄ ▄    ▄  ▄▄  ▄▄▄▄▄▄▄
//   █ ▄▄▄ █ █▀█▄ ▄ ▄▀▄▀█▄▄█▄█ █ ▄▄▄ █
//   █ ███ █ ▀▀ ▀ ▄█▄▄▄█▀▄ ▄█▀ █ ███ █
//   █▄▄▄▄▄█ █ ▄▀█▀█ ▄▀▄▀▄ ▄ █ █▄▄▄▄▄█
//   ▄▄  ▄▄▄  ▀ ▄▀▄█ ▀█▀ ██▀█▄  ▄ ▄▄▄▄
//    ▄▄█ ▀▄█▀▀▀▄█▄▄█▄ ▀ ▄▀██ █ ▀▄▄█▄
//   █ ▀██▄▄▀█ █▀▄█ ▀ █ ▀██▀ ▄▀█ █  ▀▄
//   ██▀ ▄▄▄ █▄   ▀▀█▀▄█ ▄▀ █▀▀ █ █▄█
//   ▄▀█  █▄▀███▄▀▄█▀▄█▀█▄█ ▄ █▄▀█  ██
//   ▄▀ ▀▀▄▄█ ▀▀▄█▄▄█▀ █  ▀ █▀▀ ▀  ▀▄
//     ▀   ▄▄ █ ▀▄█ █ █▀▀██▄██▄█ ▄  ▀▄
//   ▀▀ ▀▀▀▄▄▄▄▀  ▀▀█▀▄▀ ▀  █ █▄█▄▀ ▄
//   ▄▄█▀▄▀▄ ██▀▄▀▄█▄▀███▄█▄ ▄▄▄██  █▀
//   ▄▄▄▄▄▄▄ ▀▄▄▄█▄▄█▀▀█ ▄█▄▀█ ▄ █▀▀▄
//   █ ▄▄▄ █ █▀▄▀▄█  ▀█▀▄▀█▄ █▄▄▄██ █▀
//   █ ███ █  █▀  ▀▀█▀█▀  ▄▀▀▀▀█▀█▄▄
//   █▄▄▄▄▄█ █▀█▄▀▄█▀▀█  ▄██▄█▄▄▀ ▀  ▄
//   http://github.com/Pobega/hackmud
//
// :::TRUST COMMUNICATION::: {security_level:4, length:437}
//
// This script is the answer to the wolf and up CON_SPEC response.
// Pass it as a scriptor to CON_SPEC to pass the lock.
//
// Ex: npc.loc{CON_SPEC:#s.user.con_spec}
//
    
    // Ensure that args were passed, and that those args are exactly
    // d:<digit> and s:<string>. Anything else, show the usage screen.
    try {
        if(!args.d)
            throw "D != #"
        return (args.s.match(new RegExp(args.d,"g")) || []).length
    } catch(e) {
        return {ok:false, msg:`
Tier 2 \`DCON_SPEC\` lock scriptor

\`2DESCRIPTION\`

  Counts how many occurences of the digit (\`Nd\`) are in the string (\`Ns\`).

\`2USAGE\`

  As a scriptor: \{ \`NCON_SPEC\`:#s.${context.this_script}\ }

  To test: ${context.this_script} \{ \`Ns\`:\`V<string>\`, \`Nd\`:\`V<int>\`\ }
`}
    }

}
