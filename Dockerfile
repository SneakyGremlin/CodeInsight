# base image;
FROM node:20

# working directory for container. 
WORKDIR /app

# Copy package.json and package-lock.json to working directory (above)
COPY package*.json ./

# Install the application dependencies; shell form. 
RUN npm install

# Copy the rest of the application code to working directory
COPY . .

# Install Ollama // redundant step as is already in dependencies.
RUN npm install -g ollama

# Expose port for the application 
EXPOSE 3000

# Command to start application; exec form.
CMD [ "npm", "start" ]
