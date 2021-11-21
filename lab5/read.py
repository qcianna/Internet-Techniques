#!/usr/bin/python3
import cgi
import time
import html
import os
form = cgi.FieldStorage()
  
text1 = form.getvalue("data1","(no data)")
text2 = form.getvalue("data2","(no data)")
  
ip = html.escape(os.environ["REMOTE_ADDR"])
file = open("data.txt", "a")
file.write("<p>" + text1 + ";" + text2 + ";" + time.asctime() + ";" + ip + "</p>\n")
file.close()

print ("Content-type: text/html")
print ()
print ("<!DOCTYPE html>")
print ('<html lang="pl-PL"><head>')
print ('<link rel="stylesheet" href="../lab5/read.css">')
print('<meta charset="UTF-8">')
print ("<title>CGI zadanie</title>")
print ("</head><body>")

print("<h1>Biblioteka</h1>")
print ("<table>")
print ("<tr><th>Tytul</th><th>Autor</th><th>Czas</th><th>IP</th></tr>")
file = open("data.txt", "r")
for line in file:
    tab = line.split(";")
    print ("<tr>")
    for i in tab:
        print ("<td>" + i + "</td>")
    print ("</tr>")
file.close()
print ("</table>")
print ("</body></html>")
