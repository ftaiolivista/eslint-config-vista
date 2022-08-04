# eslint-config-vista

Vista Tecnologie SRL Javascript Styling rules

## Usage

Install in project

```
yarn add --dev eslint-config-vista
```

Add package to dev deps of your project

Add config in package.json or eslint and prettier files

Es package.json:


```
"prettier": "eslint-config-vista/prettier.json",
"eslintConfig": {
    "extends": ["vista"]
}
```

## LunarVim

To use with LunarVim globally install 

```
npm add --location=global prettier-eslint-cli
```

Then alter LunarVim configuration as follow

```
vim.opt.shiftwidth = 4
vim.opt.tabstop = 4

local h = require("null-ls.helpers")
local cmd_resolver = require("null-ls.helpers.command_resolver")
local methods = require("null-ls.methods")
local u = require("null-ls.utils")
local FORMATTING = methods.internal.FORMATTING

local pe = h.make_builtin({
  name = "prettier_eslint",
  meta = {
    url = "https://github.com/prettier/prettier-eslint-cli",
    description = "Eslint + Prettier",
  },
  method = FORMATTING,
  filetypes = {
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "jsx"
  },
  factory = h.formatter_factory,
  generator_opts = {
    command = "prettier-eslint",
    args = { "--stdin", "--parser", "babel", "--resolve-plugins-relative-to", "~/.nvm/versions/node/v16.16.0/lib" },
    to_stdin = true,
  },
})

local pejson = h.make_builtin({
  name = "prettier_eslint_json",
  meta = {
    url = "https://github.com/prettier/prettier-eslint-cli",
    description = "Eslint + Prettier",
  },
  method = FORMATTING,
  filetypes = {
    "json",
    "cjson",
  },
  factory = h.formatter_factory,
  generator_opts = {
    command = "prettier-eslint",
    args = { "--stdin", "--parser", "json" },
    to_stdin = true,
  },
})

local nls = require("null-ls")
nls.setup {
  on_attach = require("lvim.lsp").common_on_attach,
  sources = {
    pe,
    pejson
  }
}

local linters = require "lvim.lsp.null-ls.linters"
linters.setup {
  {
    -- name = "eslint",
    command = "eslint",
    filetypes = { "javascript" }
  }
}

```

