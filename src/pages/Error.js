export default function Error() {
  const container = document.createElement("div");
  container.innerHTML = `
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
    `;
  return container;
}
