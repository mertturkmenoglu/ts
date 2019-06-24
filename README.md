# TypeScript
***
# Description
* This repository contains my **TypeScript** codes.
* You need to install **TSC** to your system. Please follow the [original source].
# Build
* You need **TSC** on your system.
* Clone the repository:  
  * `git clone https://github.com/mertturkmenoglu/ts.git`
* After getting repository on your local environment, a simple compile process:  
```
    cd ts
    cd E001_HelloWorld
    tsc main.ts
    node main.js
```  
* You can use `afgenerator.jar` file to create auto file generation.
* Simple process:
  * Add an alias:
    * `vim ~/.bashrc`
    * Add this line: `alias gen="./afgenerator.jar"`
    * Run this command: `source ~/.bashrc`
  * Program needs `settings.json` in the directory. When you open it first time, it will ask you necessary parameters and create the file.
  * Run the program via terminal with arguments:
    * `gen 123 TsTest`: Create folder
    * `gen -s`: Update settings
***
# Contributing
* All ideas and helps are welcome. Please contact with me.
# Authors
* Mert Türkmenoğlu

[original source]: https://www.typescriptlang.org/