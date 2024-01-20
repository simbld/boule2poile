# Étape de construction
FROM node:18-alpine as build

WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json yarn.lock ./

# Installation des dépendances
RUN yarn install --frozen-lockfile

# Copie des fichiers sources
COPY . .

# Construction de l'application NestJS
RUN yarn build

# Étape de production
FROM node:18-alpine as production

WORKDIR /app

# Copie les dépendances de production
COPY --from=build /app/node_modules ./node_modules
# Copie les fichiers de build
COPY --from=build /app/dist ./dist

# Exposition du port (ajuste selon le port que ton back-end utilise)
EXPOSE 5000

# Commande pour démarrer l'application NestJS
CMD ["node", "dist/main"]
