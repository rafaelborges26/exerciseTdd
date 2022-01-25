function assert(value, description) {
    console.log(description)
    if(!value) {
        console.log('error')
    } else {
        console.log("success")
    }
}

module.exports = assert