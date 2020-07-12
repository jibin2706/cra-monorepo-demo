# cra-monorepo-demo
Monorepo example using create-react-app and common component library structure with yarn workspaces

### Directory structure
```
.
└── monorepo/
    ├── packages/
    │   ├── app/ (create-react-app)
    │   │   ├── src/
    │   │   └── package.json
    │   └── common/ (shared component library)
    │       └── components
    │       └── package.json
    ├── package.json
    └── yarn.lock
```

### Know more
I have written a [blog post explaining the details](https://jibin.tech/monorepo-with-create-react-app/).
