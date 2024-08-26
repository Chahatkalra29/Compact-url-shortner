async function shortURL() {
    const url = document.getElementById("url").value; // Fixed missing "document."
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`); // Fixed variable name "Url" to "url"
    
    if (response.ok) {
        const data = await response.text();
        document.getElementById('result').innerHTML = `
        Shortened URL: <a href="${data}" target="_blank">${data}</a>`; // Fixed spacing and capitalization
    } else {
        document.getElementById('result').innerHTML = "Error shortening the URL";
    }
}

