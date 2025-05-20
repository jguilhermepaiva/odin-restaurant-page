export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Nosso Cardápio";
  title.style.color = "white";

  const item = document.createElement("p");
  item.textContent = "🍔 X-Burger - R$ 25,00";

  menuDiv.appendChild(title);
  menuDiv.appendChild(item);
  content.appendChild(menuDiv);
}
