function (c,a) { // T2 CON_SPEC passes in {s:"string", d:digit}

    // Ensure that args were passed, and that those args are exactly
    // d:<digit> and s:<string>. Anything else, show the usage screen.
    if (c.is_scriptor || c.calling_script)
        return (args.s.match(new RegExp(args.d,"g")) || []).length
    else
        return `
:::${c.this_script}:::


\`2DESCRIPTION\`

  Tier 2 \`DCON_SPEC\` lock scriptor.

  Counts how many occurences of the digit (\`Nd\`) are in the string (\`Ns\`).


\`2USAGE\`

  As a scriptor: \{ \`NCON_SPEC\`:#s.${c.this_script}\ }
`
}
