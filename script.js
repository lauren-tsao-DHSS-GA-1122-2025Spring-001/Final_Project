let oneGIF = document.querySelectorAll('#one-GIF');
let oneText = document.querySelector('#one-text');

oneGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener('mouseover', () => {
    oneText.style.color = 'darkCyan'; 
  });

  gifContainer.addEventListener('mouseout', () => {
    oneText.style.color = ''; 
  });
});

let twoGIF = document.querySelectorAll('#two-GIF');
let twoText = document.querySelector('#two-text');

twoGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener('mouseover', () => {
    twoText.style.color = 'coral'; 
  });

  gifContainer.addEventListener('mouseout', () => {
    twoText.style.color = ''; 
  });
});

let threeGIF = document.querySelectorAll('#three-GIF');
let threeText = document.querySelector('#three-text');

threeGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener('mouseover', () => {
    threeText.style.color = 'darkOrchid'; 
  });

  gifContainer.addEventListener('mouseout', () => {
    threeText.style.color = ''; 
  });
});

let fourGIF = document.querySelectorAll('#four-GIF');
let fourText = document.querySelector('#four-text');

fourGIF.forEach((gifContainer) => { 
  gifContainer.addEventListener('mouseover', () => {
    fourText.style.color = 'paleVioletRed'; 
  });

  gifContainer.addEventListener('mouseout', () => {
    fourText.style.color = ''; 
  });
});

