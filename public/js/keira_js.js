
window.addEventListener('load', function(event) {

    const leftPanel = document.getElementById('left-content');

    document.getElementById('left-content').addEventListener('click', () => {
        leftPanel.classList.add('selected');
    });

    const rightPanel = document.getElementById('right-content');

    document.getElementById('right-content').addEventListener('click', () => {
        rightPanel.classList.add('selected');
    });


  // I'm using "click" but it works with any event
  document.addEventListener('click', event => {
    const isClickInsideLeft = leftPanel.contains(event.target)
  
    if (!isClickInsideLeft) {
        leftPanel.classList.remove('selected');
    }

    const isClickInsideRight = rightPanel.contains(event.target)
  
    if (!isClickInsideRight) {
        rightPanel.classList.remove('selected');
    }
  })
});

