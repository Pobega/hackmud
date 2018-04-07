function (c,a) { // sec:"all"

    let lib = #fs.scripts.lib(),

        // Security levels with their associated colors, to be output later.
        avail = {fullsec: [],
                 highsec: [],
                 midsec:  [],
                 lowsec:  [],
                 nullsec: []},

        // Map sec: args to their respective keys in avail
        map_args = {full: "fullsec",
                    fullsec: "fullsec",
                    high: "highsec",
                    highsec: "highsec",
                    midsec: "midsec",
                    mid: "midsec",
                    low: "lowsec",
                    lowsec: "lowsec",
                    "null": "nullsec",
                    "nullsec": "nullsec"},

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
                level_int = #fs.scripts.get_level({name:corp_script}),
                level = lib.get_security_level_name(level_int).toLowerCase()
            // If the sec level is in the list of sec levels (1~4)
            if (!(avail[level] === undefined))
                // Push it to the results.
                avail[level].push(corp_script)
        })
    })

    // return avail or avail[level] if a.object is true
    if (a.object) {
        if (a.sec) {
            if (map_args[a.sec])
                // https://stackoverflow.com/a/11508530
                return {[map_args[a.sec]]: avail[map_args[a.sec]]}
            else
                return {ok:false, msg:"please use a valid sec level"}
        }
        else
            return avail
    }

    let output="\n"

    // TODO: Get the output correctly using new data structures.
    try { // If you passed an arg to see just one sec level
        let level = map_args[a.sec]
        output += get_scripts(level)
    }
    catch(e) { // If not, show every sec level
        output += "Use {sec:\"full\"} to see fullsec scripts. Default behavior is {sec:\"all\"}\n"
        output += "Use {object:true} to get JSON output for use in scripts.\n\n"
        for ( let i=4; i>=0; i-- )
            output += get_scripts(i) + "\n"
    }

    return output
}
