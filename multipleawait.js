async function fetchData() {
    let data1 = await fetch('https://api.example.com');
    let result = await data1.json();

    let data2 = await fetch('https://api.example1.com')
    let result2 = await data2.json()

    console.log(result);
    console.log(reuslt2);
}


fetchData();