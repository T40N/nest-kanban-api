# 1. Bazowy obraz Node
FROM node:20-alpine

# 2. Katalog roboczy
WORKDIR /usr/src/app

# 3. Skopiuj package.json i package-lock.json
COPY package*.json ./

# 4. Zainstaluj zależności
RUN npm install

# 5. Skopiuj resztę kodu
COPY . .

# 6. Budowanie (opcjonalnie, jeśli używasz kompilacji do dist)
RUN npm run build

# migrations auto run
CMD ["sh", "-c", "npm run migration:run && npm run start:prod"]

# 7. Start aplikacji
CMD ["npm", "run", "start:dev"]