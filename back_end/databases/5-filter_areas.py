#!/usr/bin/python3
"""
python script that akes in the name of a state as an argument and
lists all cities of that state, using the database hbtn_0e_4_usa
"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    cursor = db.cursor()
    cursor.execute("SELECT areas.name FROM areas \
    JOIN cities ON areas.city_id = cities.id WHERE cities.name LIKE %s \
    ORDER BY areas.id", (argv[4],))
    rows = cursor.fetchall()
    print(", ".join(area[0] for area in rows))
    cursor.close()
    db.close()
