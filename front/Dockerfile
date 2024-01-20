# Étape de construction
FROM node:18-alpine as build

WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json yarn.lock ./

# Installation des dépendances
RUN yarn install --frozen-lockfile

# Copie des fichiers sources
COPY . .

# Construction de l'application
RUN yarn build

# Étape de production
FROM nginx:stable-alpine as production

# Copie des fichiers de build depuis l'étape de construction
COPY --from=build /app/dist /usr/share/nginx/html

# Exposition du port 80
EXPOSE 80

# Commande pour démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
