export default function AdminPage() {
  const container = document.createElement("div");
  container.classList.add("admin-page-container");

  container.innerHTML = `
    <h1>Admin Dashboard</h1>
    <p>Welcome, Admin! You can access the admin tools below:</p>
    <ul>
      <li><a href="/admin/day-view">Day View</a></li>
      <li><a href="/admin/staff-manage">Manage Staff</a></li>
    </ul>
  `;

  return container;
}
