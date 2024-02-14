# syntax=docker/dockerfile:1.4
FROM python:3.10-alpine AS base

# Set the working directory in the Docker container
WORKDIR /code

# Copy the requirements file into the container at /code
COPY requirements.txt /code/

# Install any dependencies
RUN pip3 install -r requirements.txt

# Copy the rest of your application's code into the container at /code
COPY . /code/

# Set environment variables for Flask
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_RUN_PORT=5000
ENV FLASK_RUN_HOST=0.0.0.0

# Make the container's port 5000 available to the outside
EXPOSE 5000

# Define the command to run the Flask application
CMD ["flask", "run", "--host=0.0.0.0"]
