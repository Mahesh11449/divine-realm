const API_URL = "http://localhost:5000";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // 🔎 Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed ❌");
        return;
      }

      alert("Registration successful ✅");

      // Optional: Redirect to login page
      window.location.href = "p1.html";

    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  });

});
