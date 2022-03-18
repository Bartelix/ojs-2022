async function fetchProfile(userId) {
  const response = await fetch(`http://localhost:8080/app/profile/${userId}`);
  return response.json();
}

async function fetchPaymentDetails(userId) {
  const response = await fetch(`http://localhost:8080/app/payments/${userId}`);
  return response.json();
}

(async () => {
  const userId = 4;
  const [userProfile, payments] = await Promise.all([fetchProfile(userId), fetchPaymentDetails(userId)]).catch(() => {
    window.alert("Cannot fetch profile or payment details!");
  });

  document.querySelector("#user-name").textContent = `User: ${userProfile.firstName} ${userProfile.lastName}`;
  document.querySelector("#user-subscription").textContent = `Subscription: ${payments.subscriptionStatus}`;
})();
