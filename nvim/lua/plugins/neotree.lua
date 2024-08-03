return {
	{
		"nvim-neo-tree/neo-tree.nvim",
		keys = {
			{ "<leader>e", "<Cmd>Neotree filesystem toggle left<CR>", desc = "Explorer NeoTree", remap = true },
		},
		opts = {
			window = {
				mappings = {
					["<space>"] = "none",
					["l"] = "open",
					["h"] = "close_all_subnodes",
					["L"] = "open_vsplit",
				},
			},
		},
	},
}
