from flask import Flask, jsonify
from flask_cors import CORS
from db import DBManager, get_db  # Ensure DB connection is initialized

# Import functions from modules
from modules.blog_titles import get_blog_titles


app = Flask(__name__)
CORS(app)


@app.route('/api/blog', methods=['GET'])
def list_blog():
    titles = get_blog_titles()
    return jsonify([title['title'] for title in titles])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
