function setSvgElementEventListeners(svgElement) {
    svgElement.addEventListener('mouseenter', () => {
      svgElement.querySelectorAll('path').forEach(path => {
        path.setAttribute('fill', '#EDCD00');
      });
    });
  
    svgElement.addEventListener('mouseleave', () => {
      svgElement.querySelectorAll('path').forEach(path => {
        path.setAttribute('fill', 'black');
      });
    });
  }
  
  const svgElement = document.querySelector('.linefour svg');
  setSvgElementEventListeners(svgElement);
  
  const svgElement2 = document.querySelector('.lineeightright svg');
  setSvgElementEventListeners(svgElement2);