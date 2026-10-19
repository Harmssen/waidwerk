// Wild-Symbole für die Wildkarte: runde Plakette in Artfarbe mit heller Silhouette (viewBox 0 0 32 32).
window.WILDICONS = {
  Rotwild: { farbe: "#A8322A", svg: `
    <path d="M16 27c-2.6 0-4-2.2-4-4.6 0-1.9 1.1-3.3 2-4.1h4c.9.8 2 2.2 2 4.1 0 2.4-1.4 4.6-4 4.6z" fill="#fff"/>
    <path d="M13.2 18.6C11 16 9.2 12.6 8.6 8.5M9.6 12.4 6.2 10.6M8.9 10.2 6.6 6.7M8.6 8.5 9.8 4.9
             M18.8 18.6C21 16 22.8 12.6 23.4 8.5M22.4 12.4l3.4-1.8M23.1 10.2l2.3-3.5M23.4 8.5l-1.2-3.6"
          stroke="#fff" stroke-width="1.7" stroke-linecap="round" fill="none"/>` },
  Damwild: { farbe: "#C27C12", svg: `
    <path d="M16 27c-2.5 0-3.8-2.1-3.8-4.4 0-1.8 1-3.1 1.9-3.9h3.8c.9.8 1.9 2.1 1.9 3.9 0 2.3-1.3 4.4-3.8 4.4z" fill="#fff"/>
    <path d="M13.6 19c-1-1.7-1.5-3.6-1.6-5.6M18.4 19c1-1.7 1.5-3.6 1.6-5.6M12.3 15.6l-2.2-.4M19.7 15.6l2.2-.4" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    <path d="M12 13.2 C8.6 13.6 5.4 11.8 4.8 8.4 L6.6 9.1 L6.5 6.6 L8.2 8.2 L8.7 5.6 L10.1 7.5 L11.1 5.4 L12 7.5 L13.1 6.4 C13.4 9.2 13.3 11.6 12 13.2 Z M 20 13.2 C 23.4 13.6 26.6 11.8 27.2 8.4 L 25.4 9.1 L 25.5 6.6 L 23.8 8.2 L 23.3 5.6 L 21.9 7.5 L 20.9 5.4 L 20 7.5 L 18.9 6.4 C 18.6 9.2 18.7 11.6 20 13.2 Z" fill="#fff"/>` },
  Sikawild: { farbe: "#6B4FA0", svg: `
    <path d="M16 27c-2.4 0-3.7-2-3.7-4.3 0-1.7 1-3 1.8-3.7h3.8c.8.7 1.8 2 1.8 3.7 0 2.3-1.3 4.3-3.7 4.3z" fill="#fff"/>
    <path d="M13.6 19c-1.6-2.2-2.6-5-2.8-8.4M11.6 14.6 9 13.8M10.8 10.6l-.9-3.2
             M18.4 19c1.6-2.2 2.6-5 2.8-8.4M20.4 14.6l2.6-.8M21.2 10.6l.9-3.2"
          stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none"/>
` },
  Rehwild: { farbe: "#3D8B4E", svg: `
    <path d="M16 27.2c-2.3 0-3.5-1.9-3.5-4 0-1.7.9-3.1 1.7-3.9h3.6c.8.8 1.7 2.2 1.7 3.9 0 2.1-1.2 4-3.5 4z" fill="#fff"/>
    <path d="M12.6 20.2c-2.8.2-5.2-1.2-6.2-3.6 2.6-.6 5 .2 6.6 2zM19.4 20.2c2.8.2 5.2-1.2 6.2-3.6-2.6-.6-5 .2-6.6 2z" fill="#fff"/>
    <path d="M14.4 18.6C13.5 15.8 12.6 12.8 11.9 9.2M12.9 13.8l-2.1-.6M12.2 10.8l1.8-1.5
             M17.6 18.6C18.5 15.8 19.4 12.8 20.1 9.2M19.1 13.8l2.1-.6M19.8 10.8l-1.8-1.5"
          stroke="#fff" stroke-width="1.7" stroke-linecap="round" fill="none"/>
    <ellipse cx="14.3" cy="18.6" rx="1.3" ry=".7" fill="#fff"/><ellipse cx="17.7" cy="18.6" rx="1.3" ry=".7" fill="#fff"/>` },
  Schwarzwild: { farbe: "#33363A", svg: `
    <path d="M6.4 20.6C5.9 17.4 6.6 14.9 8.6 13.4C9.9 12.4 11.2 11.6 12.6 11.1L13.4 10.1 14.2 10.9 15.1 9.8 15.9 10.9C18.6 11 20.9 12.5 22.6 14.6L27.2 17.3C27.8 17.7 27.8 18.7 27.2 19.1L26.2 19.8 22.6 20.5C21.8 21.5 20.6 22.1 19.4 22.3V25.2H17.3L16.9 22.5H12.3L11.9 25.2H9.8V22.1C8.1 21.7 6.9 21.3 6.4 20.6Z" fill="#fff"/>
    <path d="M18.6 12.4l1.3-2.8.7 3.1z" fill="#fff"/>
    <path d="M6.7 15.6l-1.6 2.2" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="21.2" cy="15.6" r=".85" fill="#33363A"/>
    <path d="M23.4 19.6c.6-.1 1.1-.6 1.2-1.4" stroke="#33363A" stroke-width=".9" stroke-linecap="round" fill="none"/>` },
  Muffelwild: { farbe: "#2C6A9B", svg: `
    <path d="M16 27.4c-2.4 0-3.5-2.1-3.5-4.3 0-1.9 1-3.4 1.9-4.2h3.2c.9.8 1.9 2.3 1.9 4.2 0 2.2-1.1 4.3-3.5 4.3z" fill="#fff"/>
    <path d="M14 18.4c-1.2-3.4-4.6-4.9-7-3.4-2.1 1.4-1.6 4.8.9 5.1 1.8.2 2.6-1.6 1.4-2.6
             M18 18.4c1.2-3.4 4.6-4.9 7-3.4 2.1 1.4 1.6 4.8-.9 5.1-1.8.2-2.6-1.6-1.4-2.6"
          stroke="#fff" stroke-width="2.1" stroke-linecap="round" fill="none"/>` },
  Wolf: { farbe: "#6E7883", svg: `
    <path d="M16 27.2l-3.2-2.6-2.6-4.2-1.4-5.6.6-6.4 4 3.8h5.2l4-3.8.6 6.4-1.4 5.6-2.6 4.2z" fill="#fff"/>
    <path d="M13.2 17.2l1.6.7M18.8 17.2l-1.6.7" stroke="#6E7883" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M15 22.4h2l-1 1.3z" fill="#6E7883"/>` }
};
// Plakette als SVG-Text (für Karte, Legende und Filter)
window.wildIcon = (art, size = 28) => {
  const i = window.WILDICONS[art]; if (!i) return "";
  return `<svg class="wildicon" width="${size}" height="${size}" viewBox="0 0 32 32" role="img" aria-label="${art}">
    <circle cx="16" cy="16" r="15" fill="${i.farbe}" stroke="#fff" stroke-width="1.6"/>${i.svg}</svg>`;
};
