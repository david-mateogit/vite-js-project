import "./Button.css";

export default function Button({ label, onClick }) {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}
