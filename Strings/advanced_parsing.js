function parseAndDisplayName (name) {
    let firstSpace = name.indexOf(" ");
    let lastSpace = name.lastIndexOf(" ");
    if (firstSpace === -1) {
        console.log("Name: " + name);
        console.log("Only name: " + name);
    } else if (firstSpace === lastSpace) {
        let firstName = name.slice(0,firstSpace);
        let lastName = name.slice(firstSpace + 1);
        console.log("Name: " + name);
        console.log("First name: " + firstName);
        console.log("Last name: " + lastName);
    } else if (firstSpace < lastSpace) {
        let firstName = name.slice(0,firstSpace);
        let middleName = name.slice(firstSpace + 1, lastSpace)
        let lastName = name.slice(lastSpace + 1);
        console.log("Name: " + name);
        console.log("First name: " + firstName);
        console.log("Middle name: " + middleName);
        console.log("Last name: " + lastName);

    } else {return "There is an error"}
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");

    