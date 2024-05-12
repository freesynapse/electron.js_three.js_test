## electron.js and three.js integration
Disclaimer: this is my first try at .js.

Electron and three installed through npm:
```
> mkdir PROJECT_DIR && cd PROJECT_DIR
> npm init -y
> npm install electron --save
> npm install three --save
```

To be able to import modules in .js files, they need to be declared as modules as such
```
<script type="module" src="file.js"></script>.
```

In addition, to be able to make import statements, an importmap has to be declared in 
index.html:
```
<script type="importmap">
    {
        "imports": {
        "three": "./node_modules/three/build/three.module.js",
        "OrbitControls": "./node_modules/three/examples/jsm/controls/OrbitControls.js",
        "FBXLoader": "./node_modules/three/examples/jsm/loaders/FBXLoader.js",
        "Stats": "./node_modules/three/examples/jsm/libs/stats.module.js"
        }
    }
</script>
```
