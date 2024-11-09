import Button from "../components/Button";

export default function Booking() {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>Book an Appointment</h1>
        <p>Select a date and time to book your appointment.</p>
    `;

  const button = Button({
    label: "Create Appointment",
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
