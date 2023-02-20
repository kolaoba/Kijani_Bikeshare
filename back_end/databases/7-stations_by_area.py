#!/usr/bin/python3
"""
python script that lists all cities from the database kijani_bikeshare_7_africa
"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    cur = db.cursor()
    cur.execute("SELECT stations.id, stations.name, areas.name FROM stations \
    JOIN areas ON stations.area_id = areas.id ORDER BY stations.id")
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
