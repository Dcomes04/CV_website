document.addEventListener("DOMContentLoaded", function() {
    const clickableParagraphs = document.querySelectorAll('p[id]');
  
    clickableParagraphs.forEach(paragraph => {
      paragraph.addEventListener("click", function() {
        const targetId = paragraph.getAttribute('id');
        const targetElement = document.getElementById(targetId + '-section');
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
});

function showProject(projectId) {
  document.querySelectorAll('.project').forEach(function(project) {
    project.style.display = 'none';
  });

  document.getElementById(projectId).style.display = 'block';

  var leftArrow = document.querySelector('.arrow.Left');
  var rightArrow = document.querySelector('.arrow.Right');

  if (projectId === 'conclave') {
    leftArrow.classList.add('grey');
    rightArrow.classList.remove('grey');
  } else if (projectId === 'bewater') {
    leftArrow.classList.remove('grey');
    rightArrow.classList.add('grey');
  }
}