#!/usr/bin/python3
"""
python script that lists all areas from the database kijani_bikeshare_4_africa
"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    cur = db.cursor()
    cur.execute("SELECT areas.id, areas.name, cities.name FROM areas \
    JOIN cities ON areas.city_id = cities.id ORDER BY areas.id")
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
