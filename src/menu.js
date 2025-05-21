export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Nosso Cardápio";
  title.style.color = "white";
  title.classList.add("title");

  const item = document.createElement("p");
  item.textContent = "🍔 X-Burger - De R$ 35,00 por R$ 25,00";
  item.classList.add("item-p");

  menuDiv.appendChild(title);
  menuDiv.appendChild(item);
  content.appendChild(menuDiv);
}
