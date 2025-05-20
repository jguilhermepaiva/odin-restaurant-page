import "./styles/contact.css"
export default function loadContact() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");


  const title = document.createElement("h2");
  title.textContent = "Nos contate";
  title.classList.add("title");

  const item = document.createElement("p");
  item.textContent = "🍔 telefone: 3445-3933";
  item.classList.add("item-p");

  
  menuDiv.appendChild(title);
  menuDiv.appendChild(item);
  content.appendChild(menuDiv);
}
