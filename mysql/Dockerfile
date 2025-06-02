# Use official MySQL 8.0 image
FROM mysql:8.0

# Set environment variables (important!)
ENV MYSQL_DATABASE=react_node_app
ENV MYSQL_ROOT_PASSWORD=12345678
ENV MYSQL_USER=appuser
ENV MYSQL_PASSWORD=learnIT02#

# Copy SQL script (it should not include CREATE DATABASE)
COPY ./db.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306
