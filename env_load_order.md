Environment variable load order
Next.js will always search for an environment variable in five places in your application code in the following order until it's found:

process.env (start)
.env.$(NODE_ENV).local (where NODE_ENV can be any of development, production or test)
.env.local
.env.$(NODE_ENV) (where NODE_ENV can be any of development, production or test)
.env (end)
So for example if you define a variable in .env.development.local and then redefine it in env.development, the value in env.development.local will be used.

