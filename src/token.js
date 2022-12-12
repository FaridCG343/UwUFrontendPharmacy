let cookies = document.cookie
if (cookies == '') {
    var token = ''
} else {
    cookies = cookies.split(";")
}


function setToken(value) {
    token = value;
}

export { token, setToken }