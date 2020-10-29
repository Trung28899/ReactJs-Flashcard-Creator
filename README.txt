Packages used:

1. Font Awesome:

- $ npm i --save @fortawesome/fontawesome-svg-core
- $ npm i --save @fortawesome/free-solid-svg-icons
- $ npm i --save @fortawesome/react-fontawesome
- $ npm i --save @fortawesome/free-brands-svg-icons

See documentations: 
https://www.npmjs.com/package/@fortawesome/react-fontawesome

HOW TO USE: 

    In any component that need to use fontawesome: 
    +, Step 1 : 
    import { Icon } from "@fortawesome/free-solid-svg-icons";
        
        NOTE: we can type fa then follow by the icon you want 
        to use, Visual Studio will make autosuggestions 
        for correct object of the package

    +, Step 2: 
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    +, Step 3: 
    <FontAwesomeIcon icon={Icon} />

    Other Configurations such as size, rotation, etc.
    See documentations

2. Material UI: 
