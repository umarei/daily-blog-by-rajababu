document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main > .container");

    // Load and display blog posts
    const posts = [
        { title: "Wildlife", content: "The diversity of wildlife is a testament to the incredible complexity of nature. From the dense jungles of the Amazon to the vast savannas of Africa, wildlife plays a crucial role in maintaining the balance of ecosystems. Conservation efforts are critical in protecting endangered species and preserving their habitats for future generations." },
        { title: "Sex Education", content: "Sex education is crucial for the development of healthy relationships and understanding human sexuality. It helps in reducing the rates of sexually transmitted infections (STIs) and unintended pregnancies. Comprehensive sex education programs address a range of topics including consent, contraception, and the importance of communication in relationships." },
        { title: "Rights of LGBTQ", content: "LGBTQ rights have come a long way, but there is still much to be done to ensure equality and acceptance. Advocacy for LGBTQ rights involves fighting against discrimination, promoting inclusive policies, and educating the public about the challenges faced by the LGBTQ community. Supporting LGBTQ rights is about creating a society where everyone can live with dignity and respect." }
    ];

    function loadPosts() {
        const blogPostsContainer = document.getElementById("blog-posts");
        blogPostsContainer.innerHTML = ""; // Clear previous posts

        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content.slice(0, 100)}...</p><button class="load-more" data-full-content="${post.content}">Load More</button>`;
            blogPostsContainer.appendChild(postElement);
        });
    }

    document.getElementById("load-posts").addEventListener("click", loadPosts);

    // Navigation handling
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("data-target");

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    // Event delegation for "Load More" buttons
    document.getElementById("blog-posts").addEventListener("click", function (e) {
        if (e.target.classList.contains("load-more")) {
            const fullContent = e.target.getAttribute("data-full-content");
            e.target.parentElement.querySelector("p").innerText = fullContent;
            e.target.remove();
        }
    });
});
