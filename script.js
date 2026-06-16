let currentOTP = "";

const friends = [
  {
    name: "Avinash",
    phone: "9392838405"
  },
  {
    name: "Greeshma",
    phone: "9845697179"
  },
  {
    name: "Rajath",
    phone: "8618999867"
  },
  {
    name: "Me",
    phone: "9944609796"
  }
];

function loadFriends() {
  const friendSelect = document.getElementById("friendSelect");

  friends.forEach((friend, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = friend.name;
    friendSelect.appendChild(option);
  });
}

function generateOTP() {
  currentOTP = "";

  for (let i = 0; i < 6; i++) {
    currentOTP += Math.floor(Math.random() * 10);
  }

  document.getElementById("otp").innerText = currentOTP;
}

function sendToSelectedFriend() {
  const selectedIndex = document.getElementById("friendSelect").value;

  if (selectedIndex === "") {
    alert("Please select a friend.");
    return;
  }

  if (!currentOTP) {
    alert("Please generate OTP first.");
    return;
  }

  const selectedFriend = friends[selectedIndex];

  const message = `Hi ${selectedFriend.name}, your daily OTP is: ${currentOTP}`;
  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${selectedFriend.phone}?text=${encodedMessage}`,
    "_blank"
  );
}

loadFriends();
