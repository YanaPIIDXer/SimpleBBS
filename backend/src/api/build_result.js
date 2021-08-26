const getMessage = (code) => {
    switch(code) {
        case 0: return "OK";
    }
    
    return "Fatal";
}

module.exports = (code, datas) => {
    return {
        code: code,
        message: getMessage(code),
        datas: datas,
    }
}
