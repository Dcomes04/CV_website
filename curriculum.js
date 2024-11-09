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

  var fletxaEsquerra = document.querySelector('.fletxa.Esquerra');
  var fletxaDreta = document.querySelector('.fletxa.Dreta');

  if (projectId === 'conclave') {
    fletxaEsquerra.classList.add('fosca');
    fletxaDreta.classList.remove('fosca');
  } else if (projectId === 'bewater') {
    fletxaEsquerra.classList.remove('fosca');
    fletxaDreta.classList.add('fosca');
  }
}
