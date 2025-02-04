function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://api.example.com/data1') {
          resolve({ data: 'Data 1' });
        } else if (url === 'https://api.example.com/data2') {
          resolve({ data: 'Data 2' });
        } else {
          reject('Error: URL not found');
        }
      }, 1000);
    });
  }
  
  async function processData() {
    try {
      // Call first API
      const response1 = await fetchData('https://api.example.com/data1');
      console.log('Response 1:', response1.data);
  
      // Call second API
      const response2 = await fetchData('https://api.example.com/data2');
      console.log('Response 2:', response2.data);
  
      // Simulating a delay and another call
      const response3 = await fetchData('https://api.example.com/data3');
      console.log('Response 3:', response3.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  processData();
  