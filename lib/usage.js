function (c,a) {

    let usage = {"pobega.decorrupt": `
:::${c.calling_script}:::

\`2DESCRIPTION\`

Decorrupts NPC script output

\`2USAGE\`

Calling without args:
  ${c.calling_script} { t:#s.npc.script }

Calling with args:
  ${c.calling_script} { t:#s.npc.script, a:{some:"args"} }

`,
                 "pobega.con_spec": `
:::${c.calling_script}:::


\`2DESCRIPTION\`

  Tier 2 \`DCON_SPEC\` lock scriptor.

  Counts how many occurences of the digit (\`Nd\`) are in the string (\`Ns\`).


\`2USAGE\`

  As a scriptor: \{ \`NCON_SPEC\`:#s.${c.calling_script}\ }
`,
                 "pobega.log": `
:::${c.calling_script}:::


\`LDESCRIPTION\`

  Logging library for hackmud scripts. Guaranteed \`2FULLSEC\`!


\`LUSAGE\`

  \`plet\` \`1log\` = \#fs\`4.\`${c.calling_script}()


\`LMETHODS\`

  \`0log\`.\`2<level>\`(\`Nmessage\`)
    writes \`Nmessage\` to the log.

  log.write()
    returns the current log in human readable form


\`LLEVELS\`

 Lvl | Name | Function Name | Type
 ----------------------------------------------
 1   | \`DERR\`  | log.error()   | Error message
 2   | \`eWRN\`  | log.warn()    | Warning message
 3   | \`PLOG\`  | log.info()    | Normal log
 4   | \`lYAY\`  | log.success() | Success
 5   | \`TDBG\`  | log.debug()   | Debug messages
`,
                 "pobega.lib": `
:::${c.calling_script}:::


\`LDESCRIPTION\`

  General purpose helper library for scripting. \`2FULLSEC\` guaranteed!


\`LUSAGE\`

  \`plet\` \`1lib\` = \#fs\`4.\`${c.calling_script}()


\`LMETHODS\`

  lib.color(\`Ncolor\`, \`Nmessage\`)
    \`Ncolor\`:   a color code string, ie L or e
    \`Nmessage\`: the message to colorize
`
    }

    return usage[c.calling_script]
}
