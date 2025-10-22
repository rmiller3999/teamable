//  exports.isInvalidEmail = (userObject) => {
//     return !userObject.email.includes("@")
// }
function isInvalidEmail(userObject) {
    return !userObject.email.includes("@")
}
function isInvalidPayload(userObject) {
    return !userObject.email.includes("@")
}
function isEmptyPayload(userObject) {
    return Object.keys(userObject).length === 0
}

module.exports = {
    isInvalidEmail,
    isEmptyPayload
}

//module.exports = isInvalidEmail
// module.exports = isEmptyPayload