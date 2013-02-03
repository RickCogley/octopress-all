# encoding: utf-8
require 'rubygems'
require 'nokogiri'
require 'date'

def to_url(str)
	str.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').gsub(/(-)?\z/, '').downcase
end

doc = Nokogiri::XML(File.open('blog-02-02-2013.xml'))
doc2 = Nokogiri::XML(File.open('blog-02-02-2013-1.xml'))

doc.xpath('/feed/entry[link[@rel="replies"]]').each do |entry|
	date =  DateTime.parse entry.xpath('./updated').text()
	id = entry.xpath('./id').text()[-25..-1].split('-').last
	permalink = "#{date.strftime('%Y/%m/%d')}/#{to_url(entry.xpath('./title').text())}"
	puts "Redirect 301 /blog/index.php?id=#{id} /articles/#{permalink}"
end

doc2.xpath('/feed/entry[link[@rel="replies"]]').each do |entry|
	date =  DateTime.parse entry.xpath('./updated').text()
	id = entry.xpath('./id').text()[-25..-1].split('-').last
	permalink = "#{date.strftime('%Y/%m/%d')}/#{to_url(entry.xpath('./title').text())}"
	puts "Redirect 301 /blog/index.php?id=#{id} /articles/#{permalink}"
end