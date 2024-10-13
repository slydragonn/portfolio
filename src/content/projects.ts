const PROJECTS = [
    {
        slug: "neovim-packer",
        title: "Neovim Setup with Packer",
        description: "Neovim is a hyper-extensible text editor based on Vim, and it is a fast editor compared to its counterparts like vscode, but it has a steep learning curve especially in terms of how to configure it, which I have made a bit easier for new developers who want to use neovim by creating and sharing my own configuration.",
        image: "/neovim.jpg",
        projectFeatures: [
            {
                isURL: true,
                title: "Repo",
                text: "github.com/slydragonn/dotfiles",
                href: "https://github.com/slydragonn/dotfiles"
            },
            {
                isURL: false,
                title: "Platform",
                text: "Linux/Windows"
            },
            {
                isURL: false,
                title: "Stack",
                text: "Lua, packer.nvim"
            },
            {
                isURL: true,
                title: "Blog Post",
                text: "How to Set up Neovim for Windows and Linux with Lua and Packer",
                href: "https://dev.to/slydragonn/how-to-set-up-neovim-for-windows-and-linux-with-lua-and-packer-2391"
            },
            {
                isURL: true,
                title: "Youtube Video",
                text: "Neovim Setup for Windows and Linux",
                href: "https://youtu.be/vkCnPdaRBE0?si=n55L_VFPibYk5Tyt"
            },
        ]
    },
    {
        slug: "neovim-lazy",
        title: "Neovim Setup with lazy.nvim",
        description: "Migration of my neovim configuration from packer to lazy.nvim",
        image: "/lazy.jpg",
        projectFeatures: [
            {
                isURL: true,
                title: "Repo",
                text: "github.com/slydragonn/nvim-lazy",
                href: "https://github.com/slydragonn/nvim-lazy"
            },
            {
                isURL: false,
                title: "Platform",
                text: "Linux/Windows"
            },
            {
                isURL: false,
                title: "Stack",
                text: "Lua, lazy.nvim"
            },
            {
                isURL: true,
                title: "Blog Post",
                text: "Ultimate Neovim Setup Guide: lazy.nvim Plugin Manager",
                href: "https://dev.to/slydragonn/ultimate-neovim-setup-guide-lazynvim-plugin-manager-23b7"
            },
            {
                isURL: true,
                title: "Youtube Video",
                text: "My Ultimate Neovim Setup with lazy.nvim",
                href: "https://www.youtube.com/watch?v=-kCUks3xrCM"
            },
        ]
    },
    {
        slug: "blue-river",
        title: "Blue River",
        description: "Blue River is a platform for suppliers and buyers of eco-friendly products and services. It provides a repository of suppliers to a market focused on consumption based on being environmentally friendly.",
        image: "/blueriver.jpg",
        projectFeatures: [
            {
                isURL: false,
                title: "Platform",
                text: "All/Web"
            },
            {
                isURL: false,
                title: "Stack",
                text: "Next.js, TypeScript, Firebase"
            },
            {
                isURL: false,
                title: "State",
                text: "In development"
            },
            {
                isURL: true,
                title: "Website",
                text: "Landing Page",
                href: "https://blue-river.vercel.app/"
            },
        ]
    }
]

export default PROJECTS