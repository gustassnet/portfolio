fetch("projects.json")
    .then(response => response.json())
    .then(data => {

        data.projects.forEach(project => {

            const section = document.getElementById(project.category);

            const projectCard = document.createElement("div");

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.url}" target="_blank">View Project</a>
            `;

            section.querySelector(".project-list").appendChild(projectCard);
        });

    });


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            document.querySelector(`nav a[href="#${entry.target.id}"]`).classList.add("active");
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});