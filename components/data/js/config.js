// index semua js disini
const imports = [
    import('./app.js'),
];

Promise.all(imports)
    .then(() => {
        // Code to execute after all modules are imported successfully
    })
    .catch((error) => {
        // Handle import errors
        console.error('Error importing modules:', error);
    });