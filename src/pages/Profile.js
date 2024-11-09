import Button from "../components/Button";

export default function Profile() {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>Your Profile</h1>
        <p>Manage your information and dashboards.</p>
    `;

  const button = Button({
    label: "Edit Profile",
    onClick: () => {
      console.log("clicked button");
      alert("Welcome!");
    },
  });

  container.appendChild(button);

  return container;
}
