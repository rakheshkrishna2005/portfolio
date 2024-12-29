import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "anaconda",
    "bootstrap",
    "canva",
    "css3",
    "express",
    "flask",
    "git",
    "github",
    "githubpages",
    "googlecolab",
    "html5",
    "huggingface",
    "java",
    "javascript",
    "jupyter",
    "keras",
    "langchain",
    "leetcode",
    "mongodb",
    "mysql",
    "nodedotjs",
    "netlify",
    "notion",
    "npm",
    "numpy",
    "opencv",
    "postgresql",
    "plotly",
    "pandas",
    "python",
    "pytorch",
    "tensorflow",
    "react",
    "sqlite",
    "streamlit",
    "vercel"
    // "nextdotjs",
    // "typescript",
    // "graphql",
    // "vite",
    // "tailwindcss"
];

export function IconCloudDemo() {
    return (
        <div className="relative flex h-full w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg  bg-background ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}