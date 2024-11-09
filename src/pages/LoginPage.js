import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const container = document.createElement("div");
  container.classList.add("login-container");

  const loginForm = LoginForm();

  container.appendChild(loginForm);

  return container;
}
