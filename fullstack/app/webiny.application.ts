export default {
    id: "fullstack",
    name: "fullstack",
    description: "This is the fullstack React application.",
    cli: {
        // Default args for the "yarn webiny watch ..." command (we don't need deploy option while developing).
        watch: {
            deploy: false
        }
    }
};
