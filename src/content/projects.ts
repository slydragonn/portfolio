import { type ProjectsContent } from "../types/content";

const PROJECTS: ProjectsContent = [
    {
        slug: "neovim-setup",
        title: "Neovim Setups",
        content: [
            {
                type: "features",
                value: [
                    {
                        isURL: false,
                        title: "Platform",
                        text: "Linux/Windows"
                    },
                    {
                        isURL: false,
                        title: "Stack",
                        text: "Lua, Vim, Packer.nvim, & Lazy.nvim"
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
                type: "title",
                value: "Summary"
            },
            {
                type: "text",
                value: "Neovim is a hyper-extensible text editor based on Vim, and it is a fast editor compared to its counterparts like vscode, but it has a steep learning curve especially in terms of how to configure it, which I have made a bit easier for new developers who want to use neovim by creating and sharing my own configuration."
            },
            {
                type: "title",
                value: "Repositories"
            },
            {
                type: "github",
                value: {
                    title: "dotfiles",
                    description: "My dotfiles",
                    language: "Lua",
                    stars: 101,
                    forks: 23,
                    href: "https://github.com/slydragonn/dotfiles"
                }
            },
            {
                type: "github",
                value: {
                    title: "nvim-lazy",
                    description: "Neovim Setup with Lazy.vim",
                    language: "Lua",
                    stars: 21,
                    forks: 4,
                    href: "https://github.com/slydragonn/nvim-lazy"
                }
            },
            {
                type: "title",
                value: "Features"
            },
            {
                type: "list",
                value: [
                    "folke/lazy.nvim: A modern plugin manager for Neovim.",
                    "wbthomason/packer: A use-package inspired plugin manager for Neovim.",
                    "nvim-neo-tree/neo-tree: Neovim plugin to manage the file system and other tree like structures.",
                    "tiagovla/tokyodark.nvim: A clean dark theme written in lua for neovim.",
                    "nvim-tree/nvim-web-devicons: lua fork of vim-web-devicons for neovim.",
                    "nvim-lualine/lualine.nvim: A blazing fast and easy to configure neovim statusline plugin written in pure lua.",
                    "nvim-treesitter/nvim-treesitter: Nvim Treesitter configurations and abstraction layer.",
                    "windwp/nvim-ts-autotag: Use treesitter to auto close and auto rename html tag.",
                    "stevearc/conform.nvim: Lightweight yet powerful formatter plugin for Neovim.",
                    "nvim-telescope/telescope.nvim: Highly extendable fuzzy finder over lists.",
                    "neovim/nvim-lspconfig: Quickstart configs for Nvim LSP.",
                    "hrsh7th/nvim-cmp: A completion plugin for neovim coded in Lua.",
                    "williamboman/mason.nvim: Portable package manager for Neovim that runs everywhere Neovim runs.",
                    "norcalli/nvim-colorizer.lua: Color highlighter.",
                    "akinsho/toggleterm.nvim: A neovim lua plugin to help easily manage multiple terminal windows.",
                    "lewis6991/gitsigns.nvim: Git integration for buffers.",
                    "windwp/nvim-autopairs: Autopairs for neovim written by lua.",
                    "onsails/lspkind.nvim: vscode-like pictograms for neovim lsp completion items.",
                    "L3MON4D3/LuaSnip: Snippet Engine for Neovim written in Lua.",
                    "hrsh7th/cmp-nvim-lsp: nvim-cmp source for neovim builtin LSP client.",
                    "hrsh7th/cmp-path: nvim-cmp source for path.",
                    "hrsh7th/cmp-buffer: nvim-cmp source for buffer words.",
                    "williamboman/mason-lspconfig.nvim: Extension to mason.nvim that makes it easier to use lspconfig with mason.nvim.",
                    "WhoIsSethDaniel/mason-tool-installer.nvim: Install and upgrade third party tools automatically."
                ]
            },
            {
                type: "image",
                value: "/neovim.jpg"
            },
            {
                type: "image",
                value: "/lazy.jpg"
            },
        ],
    },
    {
        slug: "blue-river",
        title: "Blue River",
        content: [
            {
                type: "features",
                value: [
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
            },
            {
                type: "title",
                value: "Summary"
            },
            {
                type: "text",
                value: "Blue River is a platform for suppliers and buyers of eco-friendly products and services. It provides a repository of suppliers to a market focused on consumption based on being environmentally friendly."
            },
            {
                type: "image",
                value: "/blueriver.jpg"
            }
        ],
    }
];

export default PROJECTS