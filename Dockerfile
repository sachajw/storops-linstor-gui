# Use the official Nginx image as the base image
FROM nginx:alpine

# Install required packages
RUN apk add --no-cache curl tar gettext

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the Nginx configuration template
COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY . .

# Copy the entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Set default value for LB_GATEWAY_API_HOST
ENV LB_GATEWAY_API_HOST=http://localhost:8080

# Set specific version
ENV LINSTOR_GUI_VERSION=1.8.2

# Download the GUI release from GitHub
RUN curl -L -o linstor-gui.tar.gz \
    "https://github.com/LINBIT/linstor-gui/releases/download/v${LINSTOR_GUI_VERSION}/linstor-gui-v${LINSTOR_GUI_VERSION}.tar.gz" && \
    mkdir -p /usr/share/nginx/html && \
    tar -xzf linstor-gui.tar.gz -C /usr/share/nginx/html --strip-components=2 && \
    rm linstor-gui.tar.gz

# Expose port 8000
EXPOSE 8000

# Use the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
