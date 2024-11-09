import AdminDayView from "./pages/AdminDayView";
import AdminStaffManage from "./pages/AdminStaffManage";
import Booking from "./pages/Booking";
import Error from "./pages/Error";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";

let currentUser = JSON.parse(localStorage.getItem("user")) || null;

const checkUserAccess = (route) => {
  return (
    !route.startsWith("/admin") && currentUser && currentUser.role === "user"
  );
};

const checkAdminAccess = (route) => {
  if (!route.startsWith("/admin")) return false;

  if (!currentUser) {
    console.log("No user found. Redirecting to login.");
    return false;
  }

  if (currentUser.role === "admin" || currentUser.role === "super-admin") {
    console.log("Access granted for admin.");
    return true;
  } else {
    console.log("Access denied for non-admin.");
    return false;
  }
};

const routes = {
  "/": Home,
  "/booking": Booking,
  "/profile": Profile,
  "/admin": LoginPage,
  "/admin/day-view": AdminDayView,
  "/admin/staff-manage": AdminStaffManage,
};

function renderRoute() {
  const path = window.location.pathname;
  let routePath = path;
  let pageComponent = routes[routePath] || Error;

  console.log("path", path);
  console.log(currentUser?.role);

  switch (true) {
    case routePath.startsWith("/admin"):
      if (currentUser?.role === "user") {
        pageComponent = Error;
      } else if (checkAdminAccess(path)) {
        console.log("Admin access granted.");
        if (routePath === "/admin") {
          routePath = "/admin/day-view";
        }
        pageComponent = routes[routePath] || Error;
      } else {
        pageComponent = routes["/admin"];
        console.log("Admin access denied.");
      }
      break;

    case currentUser?.role === "admin" && !routePath.startsWith("/admin"):
      pageComponent = Error;
      break;

    case checkUserAccess(path):
      if (routePath === "/") {
        routePath = "/booking";
      }
      pageComponent = routes[routePath] || Error;
      console.log("routePath", routePath);
      break;

    default:
      pageComponent = routes["/"];
  }

  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(pageComponent());
}

export function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  renderRoute();
}

export function initRouter() {
  window.addEventListener("popstate", renderRoute);
  renderRoute();

  document.body.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (target && target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(target.getAttribute("href"));
    }
  });
}
