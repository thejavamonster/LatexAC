// Ensure KaTeX auto-rendering is working on the page
function startAutoRendering() {
  console.log("Starting auto-rendering LaTeX expressions...");
  
  // KaTeX auto-render settings
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ]
  });
}

// Start auto-rendering after the scripts are injected
startAutoRendering();
