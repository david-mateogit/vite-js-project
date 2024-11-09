import LoginForm from "../components/LoginForm";
import "./Home.css";

export default function Home() {
  const container = document.createElement("div");
  container.classList.add("home-container");

  container.innerHTML += `
  <h1 class="home-title">Welcome to the Dashboard App</h1>
  `;

  const loginForm = LoginForm();

  container.appendChild(loginForm);

  return container;
}
