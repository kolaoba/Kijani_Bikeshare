#!/usr/bin/python3
"""
python script that lists all bike docks from the database kijani_bikeshare_8_africa
"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    cur = db.cursor()
    cur.execute("SELECT docks.id, docks.name, racks.name FROM docks \
    JOIN racks ON docks.rack_id = racks.id ORDER BY docks.id")
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
