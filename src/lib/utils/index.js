import { inview } from "svelte-inview"

export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export const fetchMarkdownPosts = async () => {
    // grabbing mds from our lib folder
    const blogPostsPath = '/src/lib/blogposts/'
    const blogMarkdownFiles = import.meta.glob('/src/lib/blogposts/*.md');
    const files = Object.entries(blogMarkdownFiles);

    const posts = await Promise.all(
        files.map(async ([ postpath, resolver ]) => {
            const { metadata: postData } = await resolver();
            const path = postpath.split(blogPostsPath)[ 1 ];

            return {
                postData,
                path
            };
        })
    );
    // most recent to least recent
    return posts.sort((a, b) => Date.parse(b.postData.date) - Date.parse(a.postData.date))
};

export function addClassInView(el, classToToggle, threshold) {
    // threshold must be between 0 & 1
    new inview(el, { threshold })

    el.addEventListener("inview_enter", (e) => {
        if (e.detail.scrollDirection.vertical === "up") el.classList.add(classToToggle)
    })

    el.addEventListener("inview_leave", (e) => {
        if (e.detail.scrollDirection.vertical === "down") el.classList.remove(classToToggle)
    })
}

//  addClassInView(node, "active", ".5")

export function removeClassInView(el, classToToggle, threshold) {
    // dynamically add class
    el.classList.add(classToToggle)

    new inview(el, { threshold })

    el.addEventListener("inview_enter", (e) => {
        if (e.detail.scrollDirection.vertical === "up") el.classList.remove(classToToggle)
    })

    el.addEventListener("inview_leave", (e) => {
        if (e.detail.scrollDirection.vertical === "down") el.classList.add(classToToggle)
    })
}

// removeClassInView(node, "active", ".5")