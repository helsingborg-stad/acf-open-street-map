# OpenStreetMap

### Description  
This feature integrates OpenStreetMap into your application, allowing you to display interactive maps. It provides a configurable map setup, including tile layers, zoom levels, and attribution controls. The map is initialized with specific settings and can be customized through the configuration interface.

## How to Utilize  

### For Administrators / Editors 
- **Step-by-Step Instructions:**
  1. Ensure the [`Config`](command:_github.copilot.openSymbolFromReferences?%5B%22Config%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition") class is properly set up with the required parameters such as [`id`](command:_github.copilot.openSymbolFromReferences?%5B%22id%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A16%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FcreateMap.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FcreateMap.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FcreateMap.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A4%2C%22character%22%3A24%7D%7D%5D%5D "Go to definition"), [`mapElement`](command:_github.copilot.openSymbolFromReferences?%5B%22mapElement%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A16%7D%7D%5D%5D "Go to definition"), [`containerElement`](command:_github.copilot.openSymbolFromReferences?%5B%22containerElement%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A4%2C%22character%22%3A16%7D%7D%5D%5D "Go to definition"), etc.
  2. Use the [`createMap`](command:_github.copilot.openSymbolFromReferences?%5B%22createMap%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2Fmap.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2Fmap.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2Fmap.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A31%2C%22character%22%3A16%7D%7D%5D%5D "Go to definition") function from [`js/map.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2Fmap.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/workspaces/municipio-deployment/wp-content/mu-plugins/OpenStreetMap/js/map.ts") to initialize the map with the desired configuration.
  3. Customize the map settings through the [`ConfigInterface`](command:_github.copilot.openSymbolFromReferences?%5B%22ConfigInterface%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2Fmap.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2Fmap.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2Fmap.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A32%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A24%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FmapInitializer.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FmapInitializer.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FmapInitializer.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A4%2C%22character%22%3A24%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FsetupTiles.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FsetupTiles.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2FsetupTiles.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A5%2C%22character%22%3A24%7D%7D%5D%5D "Go to definition") to adjust zoom levels, map style, and attribution position.
- **Capabilities/Permissions Required:** No specific permissions are required to use this feature.
- **Settings Location:** Configuration settings are managed through the [`Config`](command:_github.copilot.openSymbolFromReferences?%5B%22Config%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition") class in [`js/setupMap/config/config.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2Fmunicipio-deployment%2Fwp-content%2Fmu-plugins%2FOpenStreetMap%2Fjs%2FsetupMap%2Fconfig%2Fconfig.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/workspaces/municipio-deployment/wp-content/mu-plugins/OpenStreetMap/js/setupMap/config/config.ts").

### For Users  
- Users will see an interactive map on the frontend, which can be panned, zoomed, and interacted with. The map will display tiles based on the configured style and provide attribution information.

---

## Purpose  

### Why This Feature Exists  
- This feature was implemented to provide a seamless way to integrate interactive maps into your application. It solves the problem of manually setting up and configuring map tiles and controls.
- It benefits administrators by centralizing map configuration and reducing the need for manual setup. End users benefit from an enhanced interactive experience with the map.

### Key Benefits  
✅ Centralizes functionality or information.  
✅ Improves the user experience by providing an interactive and customizable map.  
✅ Reduces manual work for administrators by automating map setup and configuration.

---

## Meta  

- **Author:** Helsingborg Stad
- **Initial Release Date:** February, 2025