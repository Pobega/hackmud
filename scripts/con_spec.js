function (c,a) { // T2 CON_SPEC passes in {s:"string", d:digit}

    let lib = #fs.pobega.lib()

    // Ensure that args were passed, and that those args are exactly
    // d:<digit> and s:<string>. Anything else, show the usage screen.
    if (c.is_scriptor) {
        return (args.s.match(new RegExp(args.d,"g")) || []).length
    } else {
        return {ok:false, msg:`
Tier 2 ${lib.color("D", "CON_SPEC")} lock scriptor

${lib.color("2", "DESCRIPTION")}

  Counts how many occurences of the digit (\`Nd\`) are in the string (\`Ns\`).

${lib.color("2", "USAGE")}

  As a scriptor: \{ ${lib.color("N", "CON_SPEC")}:#s.${c.this_script}\ }

  To test: ${c.this_script} \{ ${lib.color("N", "s")}:${lib.color("V", "<string>")}, ${lib.color("N", "d")}:${lib.color("V", "<int>")} \}
`}
    }

}
