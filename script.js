function changeTheme(theme) {
    const body = document.body;
    const heroSection = document.querySelector('.hero-section');
    const themeTitle = document.getElementById('theme-title');
    const themeDescription = document.getElementById('theme-description');
    const themeImage = document.getElementById('theme-image');
  
    body.className = theme;
  
    switch (theme) {
      case 'cyberpunk':
        themeTitle.textContent = "THE FUTURE IS VERTICAL";
        themeDescription.textContent = "Revolutionizing the skyline with neon technology.";
        themeImage.src = "cyberpunk.jpg";
        break;
      case 'retro':
        themeTitle.textContent = "WELCOME TO old bollywood";
        themeDescription.textContent = "Mere paas MAA hai.";
        themeImage.src = "retro.jpg";
        break;
      case 'nature':
        themeTitle.textContent = "EXPLORE THE WILDERNESS";
        themeDescription.textContent = "Find peace in the beauty of nature.";
        themeImage.src = "nature.jpg";
        break;
      case 'anime':
        themeTitle.textContent = "what do u think actual freedom is?";
        themeDescription.textContent = "freedom is what you are taught.";
        themeImage.src = "anime.jpg";
        break;
    }
  }
  