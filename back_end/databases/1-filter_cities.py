#!/usr/bin/python3
"""
python script that lists all cities with a name starting
with N (upper N) from the database kijani_bikeshare_0_africa
"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    cur = db.cursor()
    cur.execute("SELECT * FROM cities WHERE name LIKE 'N%' ORDER BY id ASC")
    cities = cur.fetchall()
    for city in cities:
        if city[1][0] == 'N':
            print(city)
    cur.close()
    db.close()
