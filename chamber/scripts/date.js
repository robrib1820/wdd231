const currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `WDD231 Class Project Robson Ribeiro 
&copy ${today.getFullYear()} Londrina Chamber of Commerce`;


const lastModify = new Date(document.lastModified);

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = `Last modification in ${new Intl.DateTimeFormat(
	"en-US",
    {
        dateStyle: "full"
    }
).format(lastModify)}`;

getData();