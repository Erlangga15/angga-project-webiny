export default {
    id: "fullstack",
    name: "fullstack",
    description: "This is the fullstack React application.",
    cli: {
        // Default args for the "yarn webiny watch ..." command.
        watch: {
            // Watch five levels of dependencies, starting from this project application.
            depth: 5
        }
    }
};
