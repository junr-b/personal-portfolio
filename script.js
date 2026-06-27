const projects = document.querySelectorAll('.project');

projects.forEach(function(project) {
    const header = project.querySelector('.project-header');
    const body = project.querySelector('.project-body');

    header.addEventListener('click', function() {
        body.classList.toggle('open');
    });
});