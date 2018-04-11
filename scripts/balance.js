function (c,a) {
    let l = #fs.scripts.lib(),
        bal = #hs.accts.balance(),
        pay = /Your `2available` balance is ([\w]+)./g.exec(#fs.pay.pal())[1],
        jade = /Account balance == ([\w]+GC)/g.exec(#fs.jade.vita())[1],
        total = bal + l.to_gc_num(pay) + l.to_gc_num(jade)

        return `
:::${c.this_script}:::

accts.balance    ${l.to_gc_str(bal)}
pay.pal          ${pay}
jade.vita        ${jade}
                 ---------
\`1total\`            ${l.to_gc_str(total)}
`
}
