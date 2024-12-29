import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "vercel",
    "git",
    "python",
    "streamlit",
    "javascript",
    "java",
    "html5",
    "css3",
    "bootstrap",
    "react",
    "node.js",
    "express.js",
    "postgresql",
    "sqlite",
    "mongodb",
    "numpy",
    "pandas",
    "scikit-learn",
    "matplotlib",
    "seaborn",
    "plotly",
    "tensorflow",
    "keras",
    "pytorch",
    "opencv",
    "nltk",
    "visual-studio-code",
    "github",
    "google-cloud",
    "github-pages",
    "jupyter",
    "googlecolab",
    "anaconda",
    "pycharm",
    "postman",
    "powershell",
    "canva"
];

export function IconCloudDemo() {
    return (
        <div className="relative flex h-full w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg  bg-background ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}