function parseAndDisplayName (name) {

    let spacePlace = name.indexOf(" ");
    let firstName = name.slice(0,spacePlace);
    let lastName = name.slice(spacePlace + 1);
    
    console.log("Name: " + name);
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");

