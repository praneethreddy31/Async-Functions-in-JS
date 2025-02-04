async function allData() {
    let response1 = fetch('https://api.example1.com');
    let response2 = fetch('https://api.example1.com');
    let [result1, result2] = await Promise.all([response1,response2]);
    
    let data1= await result1.json();
    let data2 = await result2.json();

    console.log('data1 is:' , data1)
    console.log('data2 is:' , data2)

}
 allData();
//Instead of waiting for the first API call to finish before starting the second one, both are initiated at the same time.
//Promise.all() ensures that both promises are resolved before proceeding, making it more efficient.