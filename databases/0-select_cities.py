#!/usr/bin/python3
"""
python script script that lists all cities from the database kijani_bikeshare_0_africa
"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    cur = db.cursor()
    cur.execute("SELECT * FROM cities ORDER BY id ASC")
    cities = cur.fetchall()
    for city in cities:
        print(city)
    cur.close()
    db.close()
