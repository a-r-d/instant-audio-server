tree -I node_modules
echo "Building..."
npm run build
echo "Initializing..."
node index.js --port=8080

