// loadPage.js
import bannerImage from './banner.jpg';
import './styles/home.css'; // Importa os estilos CSS

export default function loadPage() {
  const container = document.getElementById("content");

  // Define apenas o background image dinamicamente
  container.style.backgroundImage = `url(${bannerImage})`;

  // Aplica classe CSS
  container.classList.add('banner-container');

  // Título
  const titleBanner = document.createElement('h2');
  titleBanner.textContent = "Os melhores hambúrgueres do Brasil";
  titleBanner.classList.add('banner-title');

  // Subtítulo
  const subTitleBanner = document.createElement('p');
  subTitleBanner.textContent = "Venha se deliciar com os melhores hambúrgueres do Brasil, com qualidade comprovada e diversos prêmios em todo o país";
  subTitleBanner.classList.add('banner-subtitle');

  // Adiciona os elementos à página
  container.appendChild(titleBanner);
  container.appendChild(subTitleBanner);
}
