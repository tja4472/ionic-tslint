Created using blank starter template.
```
ionic start ionic-tslint blank
```
ionic-angular 3.6.0

Using [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts) rule set.
### tsconfig.json
```json
"noUnusedLocals": true,
"noUnusedParameters": true,
"strict": true,  
```
### tslint.json
```json
"extends": [
"tslint:recommended"
],
```
Overrides required for clean lint.
```javascript    
// "tslint:recommended" overrides
// ------------------------------
"member-access": [false],
"no-consecutive-blank-lines": false,
"no-console": [false],
"object-literal-sort-keys": [false],
"ordered-imports": [false],
"quotemark": [true, "single"],
"trailing-comma": [false],
"typedef-whitespace": [false],
"whitespace": [false]   
```
See also:
- [tslint](https://github.com/palantir/tslint)
- [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
