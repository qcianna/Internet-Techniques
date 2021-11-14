<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" version="1.0"/> 
  <xsl:template match="/">
    <html>
      <head>
        <title>
          Biblioteka
        </title>
      </head>
      <body>
        <h1>
          Biblioteka
        </h1>
        <table border = "1" cellpadding="10">
        <tr>
          <th colspan="4" align="center">
          <xsl:attribute name="class">tytul</xsl:attribute> 
            DOSTEPNE DZIALY
          </th>
        </tr>
        <xsl:for-each select="//dzialy/dzial">
          <xsl:sort select="nazwa"/>
          <tr>
            <xsl:attribute name="class">
                <xsl:choose>
                        <xsl:when test="nazwa = 'Beletrystyka'">green</xsl:when>
                        <xsl:when test="nazwa = 'Kryminalne'">red</xsl:when>
                        <xsl:otherwise>blue</xsl:otherwise>
                </xsl:choose>
            </xsl:attribute> 
            <th colspan="4" align="center"><xsl:value-of select="nazwa"/></th>
          </tr>
          <tr>
            <th>Lp</th>
            <th>Autor</th>
            <th>Tytul</th>
            <th>Cena</th>
          </tr>
          <xsl:for-each select="ksiazka">
            <xsl:sort select="autor/nazwisko"/>
            <tr>
            <xsl:attribute name="class">
                <xsl:choose>
                        <xsl:when test="../nazwa = 'Beletrystyka'">green</xsl:when>
                        <xsl:when test="../nazwa = 'Kryminalne'">red</xsl:when>
                        <xsl:otherwise>blue</xsl:otherwise>
                </xsl:choose>
            </xsl:attribute> 
            <td><countNo><xsl:value-of select="position()" /></countNo></td>
            <td>
              <xsl:for-each select="autor">
              <p>
                <xsl:value-of select="imie"/>&#160;<xsl:value-of select="nazwisko"/>
              </p>
              </xsl:for-each>
            </td>
              <td><xsl:value-of select="tytul"/></td>
              <td><xsl:value-of select="cena"/></td>
            </tr>
          </xsl:for-each>
        </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
