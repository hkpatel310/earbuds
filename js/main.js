(() => {
    // Data for hotspot content
    const hotspotData = [
      {
        title: "Ear Tip",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
      },
      {
        title: "Charging Points",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
      },
      {
        title: "Battery",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
      },
      {
        title: "Active Noise Cancellation",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
      },
      {
        title: "Multi Function Button",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
      },
      {
        title: "Speaker",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, error.",
      },
    ];
  
    // Function to populate hotspot content
    function populateHotspotContent() {
      hotspotData.forEach((data, index) => {
        const hotspotTitle = document.getElementById(`hotspot-title-${index + 1}`);
        const hotspotText = document.getElementById(`hotspot-text-${index + 1}`);
  
        if (hotspotTitle && hotspotText) {
          hotspotTitle.textContent = data.title;
          hotspotText.textContent = data.text;
        }
      });
    }
  
    const showInfo = function () {
        const annotation = this.querySelector(".HotspotAnnotation");
        gsap.to(annotation, { autoAlpha: 1  }); // Show with GSAP autoAlpha
      };
    
      // Function to hide hotspot annotation using GSAP autoAlpha
      const hideInfo = function () {
        const annotation = this.querySelector(".HotspotAnnotation");
        gsap.to(annotation, { autoAlpha: 0  }); // Hide with GSAP autoAlpha
      };

    // Add an event listener to load hotspot content when the page is ready
    document.addEventListener("DOMContentLoaded", populateHotspotContent);
  
    const modelLoaded = () => {
      // Select all hotspots
      const hotspots = document.querySelectorAll(".Hotspot");
  
    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
    };
  
    // Add event listener for model load
    const model = document.querySelector("#model");
    model.addEventListener("load", modelLoaded);
  })();
  