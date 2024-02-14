import mysql.connector
from flask import g
import os

def get_db_password():
    password_file = '/run/secrets/db-password'  # Adjust this path as necessary
    try:
        with open(password_file, 'r') as file:
            password = file.read().strip()
        return password
    except FileNotFoundError:
        raise Exception("Database password file not found.")

def get_db_config():
    return {
        'user': 'root',
        'password': get_db_password(),
        'host': 'db',
        'database': 'example',
        'auth_plugin': 'mysql_native_password',
    }

class DBManager:
    def __init__(self):
        self.config = get_db_config()
        self.connect()

    def connect(self):
        self.connection = mysql.connector.connect(**self.config)
        self.cursor = self.connection.cursor(dictionary=True)

    def query(self, query, params=None):
        self.cursor.execute(query, params or ())
        return self.cursor.fetchall()

def get_db():
    if 'db' not in g:
        g.db = DBManager()
    return g.db
