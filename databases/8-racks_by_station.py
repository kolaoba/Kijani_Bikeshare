#!/usr/bin/python3
"""
python script that lists all racks from the database kijani_bikeshare_8_africa
"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                         passwd=argv[2], db=argv[3], charset="utf8")
    cur = db.cursor()
    cur.execute("SELECT racks.id, racks.name, stations.name FROM racks \
    JOIN stations ON racks.station_id = stations.id ORDER BY racks.id")
    rows = cur.fetchall()
    for row in rows:
        print(row)
    cur.close()
    db.close()
