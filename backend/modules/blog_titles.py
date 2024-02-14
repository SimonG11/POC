# blog_titles.py
from db import get_db

def get_blog_titles():
    db = get_db()
    titles = db.query('SELECT title FROM blog')
    return titles
