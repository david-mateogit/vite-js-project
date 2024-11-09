import Button from "../components/Button";

export default function Dashboard() {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>Check your status</h1>
        <p>Here is your current status.</p>
    `;

  const button = Button({
    label: "Check Status Entry",
    onClick: () => {
      console.log("clicked button");
      alert("Welcome!");
    },
  });

  const logoutButton = Button({
    label: "Logout",
    onClick: () => {
      console.log("clicked logout button");
      localStorage.removeItem("user");
      window.location.href = "/";
    },
  });

  container.appendChild(button);
  container.appendChild(logoutButton);

  return container;
}
