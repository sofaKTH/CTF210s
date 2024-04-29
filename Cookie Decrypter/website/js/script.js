document.cookie = "password=414534416167425641484d4154774245414555416377424f41486f415551427a414538415241424e41484d41546742364145554163774250414551415751427a414534416167427241484d4154674271414763416377424f41476f415651427a414538415241424241484d41546742364145454163774250414551415451427a414534416567424241484d4154774255414645416377424f41486f415251427a414534416167426e41484d41546742714146554163774250414551415151427a414534416567425641484d4154774245414530416377424f41486f415151427a414538415641425641484d4154674236414555416377424f41476f415a77427a414534416167425641484d4154774245414545416377424f41486f415151427a414538415241424e41484d41546742364145554163774250414551415a77427a414534416167427241484d4154674271414763416377424f41476f415651427a414538415241424641484d415467427141466b4163774250414551415451427a414534416567424241484d4154774255414655416377424f41476f415751427a414534416167426e41484d41546742714146454163774250414551415751427a414534416167426a41484d4154774245414530416377424f41486f415151427a414538415641425641484d4154674236414645416377424f41476f415a77427a414534416167425241484d4154774245414763416377424f41476f415a77427a414538415241424e41484d41546742364145454163774250414651415651427a414534416167425641484d4154674271414763416377424f41476f415651427a414538415241424641484d41546742714146454163774250414551415451427a414534416567424241484d4154774255414645416377424f41476f415977427a414534416167426e41484d41546742714146554163774250414551415151427a41453441656742464144303d"
document.cookie = "username=Ben Dover"

const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        alert("Correct, the flag is 210S{c0ok1esaReG0Od}")
    } else {
        alert("Wrong")
    }
})

function authentication(username,password){
    const hash = new jsSHA("SHA-512", "TEXT", {numRounds: 1})
    hash.update(password)
    password = hash.getHash("HEX")
    
    console.log(password)

    if (username === "Ben Dover" && password === "bbf91b346a0e779e2185b9a0d7ad4f1203c0d85f2915f1710f579ed2ca63599967818fe6d1865fc0359ca7c5fa3390a97e63291533ff88999c489dcdd946ce79"){
        return true
    } else {
        return false
    }
}