const { DIVIDE_BY_ZERO_ERROR_MESSAGE } = require("./constants/appconstants")

const divide = (a, b) => {
    if (b === 0)
        throw new Error(DIVIDE_BY_ZERO_ERROR_MESSAGE)

    return a / b
}
module.exports = { divide }