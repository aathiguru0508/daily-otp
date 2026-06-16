let currentOTP = "";

const friendPhone = "+91XXXXXXXXXX";
const myPhone = "+91XXXXXXXXXX";

function generateOTP() {
  currentOTP = "";

  for (let i = 0; i < 6; i++) {
    currentOTP += Math.floor(Math.random() * 10);
  }

  document.getElementById("otp").innerText = currentOTP;
}

function getMessage() {
  if (!currentOTP) {
    alert("Please generate OTP first.");
    return null;
  }

  return `Your daily OTP is: ${currentOTP}`;
}

function sendSMS(phoneNumber) {
  const message = getMessage();

  if (!message) {
    return;
  }

  const encodedMessage = encodeURIComponent(message);

  window.location.href = `sms:${phoneNumber}?body=${encodedMessage}`;
}

function sendToFriend() {
  sendSMS(friendPhone);
}

function sendToMe() {
  sendSMS(myPhone);
}
