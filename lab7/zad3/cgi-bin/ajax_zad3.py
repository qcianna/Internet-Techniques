#!/usr/bin/python3
import cgi

form = cgi.FieldStorage()

print ("Content-Type: text/html")
print ()
print ("""\
<table>
<tr><th>Tytul</th><th>Autor</th></tr>
""")
file = open("mydata.txt", "r")
for line in file:
    tab = line.split(";")
    print ("<tr>")
    for i in tab:
        print ("<td>" + i + "</td>")
    print ("</tr>")
file.close()
print ("</table>")
