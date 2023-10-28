let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    document.getElementById("chuck").src="https://cdn.discordapp.com/attachments/873097106888474627/1167927875056455830/chuck_pixel_2.png?ex=654fe898&is=653d7398&hm=8aed8ac1d6ab4d435f632cfc78876698bb9f12a0b9dbfc402541fa9cb2ba0690&"
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    document.getElementById("blood").src="https://image.spreadshirtmedia.com/image-server/v1/designs/1026101028"
    document.getElementById("chuck").src="https://cdn.discordapp.com/attachments/873097106888474627/1167927874725085254/chuck_pixel_1.png?ex=654fe898&is=653d7398&hm=e4b9d28f3a5f51fb7a76a5554d38f0f5143d31dbfaa377df2eb2eca8c26e25ac&"
}

// add function that changes background to overlay pixel blood and fades out after each 'save' click 
// after each increment click, change main pixel to have a heart near by 
