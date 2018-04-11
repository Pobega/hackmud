function (c,a) {

    class lib {
        color(clr, msg)   { return `\`${clr}${msg}\`` }
    }

    if (c.is_scriptor || c.calling_script)
        return new lib()

    return `
:::${c.this_script}:::


\`LDESCRIPTION\`

  General purpose helper library for scripting. \`2FULLSEC\` guaranteed!


\`LUSAGE\`

  \`plet\` \`1lib\` = \#fs\`4.\`${c.this_script}()


\`LMETHODS\`

  lib.color(\`Ncolor\`, \`Nmessage\`)
    \`Ncolor\`:   a color code string, ie L or e
    \`Nmessage\`: the message to colorize
`

}
