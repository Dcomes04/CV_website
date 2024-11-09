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

  var fletxaEsquerra = document.querySelector('.arrow.Left');
  var fletxaDreta = document.querySelector('.arrow.Right');

  if (projectId === 'conclave') {
    fletxaEsquerra.classList.add('grey');
    fletxaDreta.classList.remove('grey');
  } else if (projectId === 'bewater') {
    fletxaEsquerra.classList.remove('grey');
    fletxaDreta.classList.add('grey');
  }
}
