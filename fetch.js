// async with fetch
async function userData() {
    try{
        let response = await fetch('http://''https://jsonplaceholder.typicode.com/users') //dummy link
        let users = await response.json();
        console.log(users);
    } catch(error) {
        console.error('Erro:', error)
    }
}

userData();