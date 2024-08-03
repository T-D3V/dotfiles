local opt = vim.opt
vim.g.mapleader = " "

opt.wrap = true
opt.conceallevel = 1
opt.cursorline = true
opt.number = true
opt.relativenumber = true
opt.hlsearch = true
opt.incsearch = true
opt.scrolloff = 8
opt.clipboard = "unnamedplus"
opt.breakindent = true
opt.inccommand = "split"

opt.tabstop = 2
opt.softtabstop = 2
opt.shiftwidth = 2
opt.expandtab = true

opt.swapfile = false
opt.cinoptions:append(":0")
