let d = new Date();
console.log(document.body)

let data = []
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

const createPdf = () => {
    const spaceInfo = {}
    spaceInfo.address = document.getElementById('address').value
    spaceInfo.description = document.getElementById('desc').value
    spaceInfo.amount = document.getElementById('amount').value
    var newWindow = window.open('./HTML_ CSS_index.html');
    data.push(spaceInfo)
    localStorage.setItem('data_to_print', JSON.stringify(data))
}

const addNewSpace = () => {
    const spaceInfo = {}
    spaceInfo.address = document.getElementById('address')
    spaceInfo.description = document.getElementById('desc')
    spaceInfo.amount = document.getElementById('amount')
    data.push(spaceInfo)
    document.getElementById('address').innerHTML = ''
    document.getElementById('desc').innerHTML = ''
    document.getElementById('amount').innerHTML = ''
}