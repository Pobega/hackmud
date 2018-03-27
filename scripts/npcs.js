function (c,a) {

    // Security levels with their associated colors, to be output later.
    let seclvls = {4:"`2FULLSEC`",
                   3:"`JHIGHSEC`",
                   2:"`5MIDSEC`",
                   1:"`DLOWSEC`"},

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
                   "internal",
                   "memberlogin",
                   "members",
                   "members_only",
                   "member_access",
                   "priv",
                   "public"],

        // Used for storing currently available NPC corp scripts with
        // relation to their security level (4-FULLSEC, 1-LOWSEC)
        results = {1: [],
                   2: [],
                   3: [],
                   4: []}

    corps.forEach((corp) => { // For each corp
        scripts.forEach((script) => { // And for each script name
            let corp_script = `${corp}.${script}`,
                level = #fs.scripts.get_level({name:corp_script})
            // If the sec level is in the list of sec levels (1~4)
            if (!(seclvls[level] === undefined))
                // Push it to the results.
                results[level].push(corp_script)
        })
    })

    // TODO: print this more pretty
    return results
}
