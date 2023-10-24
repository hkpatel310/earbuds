(() => {
    // Function to handle model loading
    const modelLoaded = () => {
      // Select all hotspots
      const hotspots = document.querySelectorAll(".Hotspot");
  
      // Hide hotspot annotations initially
      hotspots.forEach(hotspot => {
        const annotation = hotspot.querySelector(".HotspotAnnotation");
        annotation.style.display = "none";
      });
  
      // Show hotspot annotations on hover
      hotspots.forEach(hotspot => {
        hotspot.addEventListener("mouseover", showInfo);
        hotspot.addEventListener("mouseout", hideInfo);
      });
    };
  
    // Function to show hotspot annotation on hover
    const showInfo = function() {
      // Show the annotation text on hover
      const annotation = this.querySelector(".HotspotAnnotation");
      annotation.style.display = "block";
    };
  
    // Function to hide hotspot annotation when not hovered
    const hideInfo = function() {
      // Hide the annotation text when not hovered
      const annotation = this.querySelector(".HotspotAnnotation");
      annotation.style.display = "none";
    };
  
    // Add event listener for model load
    const model = document.querySelector("#model");
    model.addEventListener("load", modelLoaded);
})(); 