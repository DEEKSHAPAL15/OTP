
const form = document.querySelector("form");
const input = document.querySelector("input");

const getOTP =()=>{
    return Math.floor(9999*Math.random());
}

const insertOTP = (e) =>{
    e.preventDefault();

    const otp = getOTP().toString();

    if(otp.length === 4) {
        input.value = otp;
    }
};

form,addEventListener("submit", insertOTP);
