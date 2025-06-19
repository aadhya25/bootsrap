# Use a lightweight web server
FROM nginx:alpine

# Copy your static files to the nginx directory
COPY ./portfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80
