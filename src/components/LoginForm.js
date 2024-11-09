export default function LoginForm() {
  const container = document.createElement("div");
  container.classList.add("login-container");

  const title = document.createElement("h1");
  title.textContent = "Login";

  const form = document.createElement("form");
  form.innerHTML = `
    <label for="username">Username</label>
    <input type="text" id="username" name="username" required />
    
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required />
    
    <button type="submit">Login</button>
  `;
  form.onsubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Simulate admin login validation
    if (username === "admin" && password === "admin123") {
      const user = { username, role: "admin" }; // Admin user
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/admin/day-view"; // Redirect to admin page
    } else if (username === "superadmin" && password === "admin123") {
      const user = { username, role: "super-admin" }; // Super-admin user
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/admin/day-view"; // Redirect to admin page
    } else if (username === "user" && password === "user123") {
      const user = { username, role: "user" }; // Regular user
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/"; // Redirect to home page for regular users
    } else {
      alert("Invalid credentials");
    }
  };

  container.appendChild(title);
  container.appendChild(form);

  return container;
}
