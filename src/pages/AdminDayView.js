import Button from "../components/Button";

export default function AdminDayView() {
  const container = document.createElement("div");
  container.classList.add("admin-day-view");

  container.innerHTML = `<h1>Admin Day View</h1>`;

  const logoutButton = Button({
    label: "Logout",
    onClick: () => {
      console.log("clicked logout button");
      localStorage.removeItem("user");
      window.location.href = "/admin";
    },
  });

  container.appendChild(logoutButton);

  return container;
}
