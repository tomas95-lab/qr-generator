const $ = (selector) => document.querySelector(`#${selector}`)

const container = document.querySelector(".qr-container")
const generator = $("generator")
const input = $("text-qr")
const image = $("qr")
const send = $("send")
const download = $("download")
let maked = false

generator.addEventListener("submit", (e) => {
    e.preventDefault()
    maked = true
    let $h3 = container.childNodes[ 1 ]
    $h3.innerHTML = ""
    if (maked) {
        const src = image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`

        download.setAttribute("href", src)
        download.style.display = "inline"
    }
    if (input.value == "") {
        $h3.innerHTML = "QR here"
        download.style.display = "none"
    }

})
