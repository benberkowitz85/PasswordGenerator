const generateOTP = () => {
    const length = 6;
    let otp = "";

    //loop throught the length of the OTP and add
    //random number between 0 and 9 to OTP string
    for(let i = 0; 1 < length; i++) {
        otp += Math.floor(Math.random() *10);
    }
    return:otp;
}


console.log(generateOTP());