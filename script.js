let currentOTP = "";

const friendPhone = "9845697179";
const myPhone = "9944609796";

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

function sendWhatsApp(phoneNumber) {
  const message = getMessage();

  if (!message) {
    return;
  }

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}

function sendToFriend() {
  sendWhatsApp(friendPhone);
}

function sendToMe() {
  sendWhatsApp(myPhone);
}
