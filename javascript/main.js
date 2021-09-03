// Portfolio Category Section

const sortThroughProjectCategories = function (e) {
  const projects = document.querySelectorAll(".featured");
  const projectCategories = document.querySelectorAll(".project");

  function removeActiveProject() {
    projectCategories.forEach((projectcategory) => {
      projectcategory.classList.remove("active-project");
    });
  }

  projectCategories.forEach((projectcategory) => {
    projectcategory.addEventListener("click", function (e) {
      removeActiveProject();
      projectcategory.classList.add("active-project");
    });
  });

  projectCategories.forEach((projectcategory) => {
    projectcategory.addEventListener("click", function (e) {
      const categoryData = projectcategory.dataset.category;
      const columns = document.querySelectorAll(".col");

      projects.forEach((project) => {
        if (!project.classList.contains(categoryData)) {
          project.classList.add("project-hide");
        } else {
          project.classList.remove("project-hide");
          project.animate(
            [
              {
                transform: "scale(0.3)",
                opacity: "0",
              },
              {
                transform: "scale(1)",
                opacity: "1",
              },
            ],
            {
              duration: 1000,
              fill: "forwards",
            }
          );
        }
      });

      for (let i = 0; i < columns.length; i++) {
        if (columns[i].children[0].classList.contains("project-hide")) {
          columns[i].classList.add("d-none");
        } else {
          columns[i].classList.remove("d-none");
        }
      }
    });
  });
};

sortThroughProjectCategories();

// Show Project Hover States

const showProjectHoverStates = function (e) {
  const featuredProjects = document.querySelectorAll(".featured");

  featuredProjects.forEach((project) => {
    project.addEventListener("mouseenter", function (e) {
      //   e.preventDefault();
      project.children[0].classList.add("project-darken");
      project.children[0].classList.remove("project-bg");
    });
  });

  featuredProjects.forEach((project) => {
    project.addEventListener("mouseleave", function (e) {
      //   e.preventDefault();
      project.children[0].classList.remove("project-darken");
      project.children[0].classList.add("project-bg");
    });
  });
};

showProjectHoverStates();
