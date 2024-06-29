//Write a function called fetchData that uses fetch to get data from a given URL and returns the JSON response. Handle any potential errors with a try-catch block.
async function fetchData(url:string):Promise<any>{
    const response=await fetch(url);
   try {
     if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
     }
     else{
         const data=response.json();
         return data;
     }
   } catch (error) {
    console.error("Error:",(error as Error).message);
    throw error;
   }
}
const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(url).then(data=>console.log(data)).catch(error=>console.log(error));
