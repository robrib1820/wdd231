const myInfo = new URLSearchParams(window.location.search);
document.getElementById("thanks").innerHTML = `
<h1>Thank you for joining us!</h1>
`
document.getElementById("results").innerHTML = `
<p>Registration of ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>Your organizational title is ${myInfo.get("organizational")}</p>
<p>Email: ${myInfo.get("email")}</p>
<p>Phone: ${myInfo.get("phone")}</p>
<p>Business Name is ${myInfo.get("business")}</p>
<p>You are a ${myInfo.get("membership")}</p>
`;
