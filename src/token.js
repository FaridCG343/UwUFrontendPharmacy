let cookies = document.cookie
var token = ''
if (cookies == '') {
    token = ''
} else {
    cookies.split(";").forEach((value) => {
        let arr = value.split("=")
        if (arr[0].trim() == 'token_c') {
            token = arr[1]
        }
    })

}
function setToken(value) {
    token = value;
}

export { token, setToken }