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