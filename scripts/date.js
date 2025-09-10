
const currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `&copy ${today.getFullYear()} Robson Ribeiro, Paraná - Brasil`;


const lastModify = new Date(document.lastModified);

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = `Last modification in ${new Intl.DateTimeFormat(
	"en-US",
    {
        dateStyle: "full"
    }
).format(lastModify)}`;

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // request
  const data = await response.json(); // parse the JSON data
  console.log(data); // temp output test of data response 
}

getData();