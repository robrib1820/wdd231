const myInfo = new URLSearchParams(window.location.search);
document.getElementById("subscription").innerHTML = `
<h1>We are happy you for your subscription!</h1>
`
document.getElementById("results").innerHTML = `
<p>Subscription of ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Your phisical level is ${myInfo.get("experience")}</p>
<p>Email: ${myInfo.get("email")}</p>
<p>Phone: ${myInfo.get("phone")}</p>
<p>Actual weight is ${myInfo.get("weight")} Kg</p>
`;