import styles from './Footer.module.css';

export default function Footer() {
  const footer = document.createElement('footer');
  footer.className = styles.footer;

  const paragraph = document.createElement('p');
  paragraph.textContent = '© 2023 Your Company. All rights reserved.';

  footer.appendChild(paragraph);
  return footer;
}
