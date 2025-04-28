// 2017 color
let oneGIF = document.querySelectorAll("#one-GIF");
let oneText = document.querySelector("#one-text");

oneGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener("mouseover", () => {
    oneText.style.color = "darkCyan"; 
  });

  gifContainer.addEventListener("mouseout", () => {
    oneText.style.color = ""; 
  });
});

// 2018 color
let twoGIF = document.querySelectorAll("#two-GIF");
let twoText = document.querySelector("#two-text");

twoGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener("mouseover", () => {
    twoText.style.color = "orangeRed"; 
  });

  gifContainer.addEventListener("mouseout", () => {
    twoText.style.color = ""; 
  });
});

// 2019 color
let threeGIF = document.querySelectorAll("#three-GIF");
let threeText = document.querySelector("#three-text");

threeGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener("mouseover", () => {
    threeText.style.color = "darkOrchid"; 
  });

  gifContainer.addEventListener("mouseout", () => {
    threeText.style.color = ""; 
  });
});

// 2020 color
let fourGIF = document.querySelectorAll("#four-GIF");
let fourText = document.querySelector("#four-text");

fourGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener("mouseover", () => {
    fourText.style.color = "blue"; 
  });

  gifContainer.addEventListener("mouseout", () => {
    fourText.style.color = ""; 
  });
});

// 2023 color
let fiveGIF = document.querySelectorAll("#five-GIF");
let fiveText = document.querySelector("#five-text");

fiveGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener("mouseover", () => {
    fiveText.style.color = "#025a02"; 
  });

  gifContainer.addEventListener("mouseout", () => {
    fiveText.style.color = ""; 
  });
});

// 2024 color
let sixGIF = document.querySelectorAll("#six-GIF");
let sixText = document.querySelector("#six-text");

sixGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener("mouseover", () => {
    sixText.style.color = "#0047bc"; 
  });

  gifContainer.addEventListener("mouseout", () => {
    sixText.style.color = ""; 
  });
});

