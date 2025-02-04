function delay(ms) {
    return new Promise ( resolve => (resole, ms));

}

async function something() {
    console.log("hello js");
    await delay (2000);
    console.log("hello js2");

}
something();