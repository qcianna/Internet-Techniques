#!/usr/bin/python3
import cgi
import time
import html
import os
form = cgi.FieldStorage()
  
text1 = form.getvalue("data1","(no data)")
text2 = form.getvalue("data2","(no data)")
  
ip = html.escape(os.environ["REMOTE_ADDR"])
file = open("mydata.txt", "a")
file.write(text1 + ";" + text2 + "\n")
file.close()
