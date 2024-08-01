# Stage 1: Build Stage
FROM node:20.9.0-alpine AS build

# Set the working directory
WORKDIR /app

# Install pnpm and dependencies (including dev dependencies)
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN pnpm run build

# Stage 2: Production Stage
FROM node:20.9.0-alpine AS production

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml for installing only production dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist

# Copy the environment file (if you choose to use it this way)
COPY .env .env

# Expose the application port (default: 3000)
EXPOSE 3000

# Set the command to run the application
CMD ["node", "dist/main"]
