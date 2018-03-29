function (c,a) { // sec:"all"

    // Security levels with their associated colors, to be output later.
    let avail = {0: {level:"`eNULLSEC`", scripts:[]},
                 1: {level:"`DLOWSEC`", scripts:[]},
                 2: {level:"`5MIDSEC`", scripts:[]},
                 3: {level:"`JHIGHSEC`", scripts:[]},
                 4: {level:"`2FULLSEC`", scripts:[]}},

        map_args = {full: 4,
                    fullsec: 4,
                    high: 3,
                    highsec: 3,
                    midsec: 2,
                    mid: 2,
                    low: 1,
                    lowsec: 1,
                    "null": 0,
                    "nullsec": 0},

    // All current NPC corps
        corps = ["amal_robo",
                 "aon",
                 "archaic",
                 "bluebun",
                 "bunnybat_hut",
                 "context",
                 "core",
                 "cyberdine",
                 "empty_nest",
                 "etceteraco",
                 "futuretech",
                 "goodfellow",
                 "halperyon",
                 "kill_9_1",
                 "kill_bio",
                 "legion_bible",
                 "legion_intl",
                 "light",
                 "lowell_extermination",
                 "marco_polo",
                 "merrymoor_pharma",
                 "nation_of_wales",
                 "nogrub",
                 "nuutec",
                 "pica",
                 "protein_prevention",
                 "ros13",
                 "ros_13_update_checker",
                 "setec_gas",
                 "skimmerite",
                 "sn_w",
                 "soylentbean",
                 "subject_object",
                 "suborbital_airlines",
                 "tandoori",
                 "the_holy_checksum",
                 "turing_testing",
                 "tyrell",
                 "vacuum_rescue",
                 "weathernet",
                 "welsh_measles_info",
                 "weyland",
                 "world_pop"],

        // All current NPC corp script names
        scripts = ["employees",
                   "employee_login",
                   "emplogin",
                   "intern",
                   "internal",
                   "memberlogin",
                   "members",
                   "members_only",
                   "member_access",
                   "priv",
                   "private",
                   "public"]

    function get_scripts(level) {
        let output = `${avail[level]["level"]} (${avail[level]["scripts"].length})\n`
        avail[level]["scripts"].forEach((script) => {
            output += `    ${script}\n`
        })
        return output
    }

    corps.forEach((corp) => { // For each corp
        scripts.forEach((script) => { // And for each script name
            let corp_script = `${corp}.${script}`,
                level = #fs.scripts.get_level({name:corp_script})
            // If the sec level is in the list of sec levels (1~4)
            if (!(avail[level] === undefined))
                // Push it to the results.
                avail[level]["scripts"].push(corp_script)
        })
    })

    // Not getting fancy here, just want to show the scripts in
    // decreasing order of security level.
    let output ="\n"

    // If you passed an arg to see just one sec level
    if (a.sec && map_args[a.sec]) {
        let level = map_args[a.sec]
        output += get_scripts(level)
    } else { // If not, show every sec level
        if (!a.sec) // If the user passed NO args, show usage info
            output += "Use {sec:\"full\"} to see fullsec scripts. Default behavior is {sec:\"all\"}\n\n"
        for ( let i=4; i>=0; i-- )
            output += get_scripts(i) + "\n"
    }

    return output
}
