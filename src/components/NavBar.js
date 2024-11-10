import styles from "./NavBar.module.css";

export default function NavBar() {
  const location = window.location.pathname;
  const user = JSON.parse(localStorage.getItem("user"));

  const isAdminRoute = location.startsWith("/admin");
  const isUser = user && user.role === "user";
  const isAdmin =
    user && (user.role === "admin" || user.role === "super-admin");

  const nav = document.createElement("nav");
  nav.className = styles.navbar;
  const homeLink = document.createElement("a");
  homeLink.href = isAdminRoute ? "/admin" : "/";
  homeLink.textContent = "Home";
  nav.appendChild(homeLink);

  if (!isAdminRoute && isUser) {
    const dashboardLink = document.createElement("a");
    dashboardLink.href = "/dashboard";
    dashboardLink.textContent = "Dashboard";
    nav.appendChild(dashboardLink);

    const profileLink = document.createElement("a");
    profileLink.href = "/profile";
    profileLink.textContent = "Profile";
    nav.appendChild(profileLink);
  }

  if (isAdmin && isAdminRoute) {
    const dayViewLink = document.createElement("a");
    dayViewLink.href = "/admin/day-view";
    dayViewLink.textContent = "Day View";
    nav.appendChild(dayViewLink);

    const staffManageLink = document.createElement("a");
    staffManageLink.href = "/admin/staff-manage";
    staffManageLink.textContent = "Manage Staff";
    nav.appendChild(staffManageLink);
  }

  return nav;
}
