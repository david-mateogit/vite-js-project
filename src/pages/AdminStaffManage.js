import Button from "../components/Button";

export default function AdminStaffManage() {
  const container = document.createElement("div");
  container.classList.add("admin-staff-manage");

  container.innerHTML = `<h1>Manage Staff</h1>`;

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
