
FROM node:24-bookworm-slim

ENV NODE_ENV=production

WORKDIR /app

# Install production dependencies from the lockfile.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy the backend application.
COPY --chown=node:node . .

# Run as the non-root Node.js user.
USER node

EXPOSE 4000

CMD ["npm", "start"]
