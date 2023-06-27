<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:variable name="path" select="'https://as-math.github.io/problems-view'"/>

<xsl:template match="/document">
	<html>
		<xsl:call-template name="html_head"/>
		<xsl:call-template name="html_body"/>
	</html>
</xsl:template>

<xsl:template name="html_head">
	<head>
		<title><xsl:value-of select="@title"/></title>
		<meta charset="UTF-8"/>
		<link href="{$path}/index.css" rel="stylesheet" />
		<script type="module" src="{$path}/index.js"></script>
	</head>
</xsl:template>

<xsl:template name="html_body">
	<body>
		<div class="problems-container problems-container-main">
			<xsl:apply-templates/>
		</div>
	</body>
</xsl:template>

<xsl:template match="group">
	<fieldset class="problems-group problems-container">
		<legend><xsl:value-of select="./@title"/></legend>
		<xsl:apply-templates/>
	</fieldset>
</xsl:template>

<xsl:template match="problem">
	<problem-card>
		<xsl:apply-templates/>
	</problem-card>
</xsl:template>

<xsl:template match="problem/text">
	<div slot="main-text">
		<xsl:copy-of select="node() | @*"/>
	</div>
</xsl:template>

<xsl:template match="problem/answer">
	<div slot="details" class="answer">
		<xsl:copy-of select="node() | @*"/>
	</div>
</xsl:template>

<xsl:template match="problem/solution">
	<div slot="details" class="solution">
		<xsl:copy-of select="node() | @*"/>
	</div>
</xsl:template>

<xsl:template match="problem/comment">
	<div slot="details" class="comment">
		<xsl:copy-of select="node() | @*"/>
	</div>
</xsl:template>

<xsl:template match="problem/source">
	<div slot="details" class="source">
		<xsl:copy-of select="node() | @*"/>
	</div>
</xsl:template>

</xsl:stylesheet>