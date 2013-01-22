#!/usr/bin/env ruby
#
# Convert blogger (blogspot) posts to jekyll posts
#
# Basic Usage
# -----------
#
#   ./blogger_to_jekyll.rb feed_url
#
#  where `feed_url` can have the following format:
#
#  http://{your_blog_name}.blogspot.com/feeds/posts/default
#
# Requirements
# ------------
# 
#  * feedzirra: https://github.com/pauldix/feedzirra
#
# Notes
# -----
#
#  * Make sure Blogger shows full output of article in feeds.
#  * Commenting on migrated articles will be set to false by default.

include RbConfig
 
require 'rubygems' if CONFIG['host_os'].start_with? "darwin"
require 'feedzirra'
require 'date'
require 'optparse'
require 'yaml'
require File.open(File.expand_path('../downmark_it.rb', __FILE__))

def parameterize(string, sep = '-')
  parameterized_string = string
  parameterized_string.gsub!(/[^a-z0-9\-_]+/i, sep)
  unless sep.nil? || sep.empty?
    re_sep = Regexp.escape(sep)
    parameterized_string.gsub!(/#{re_sep}{2,}/, sep)
    parameterized_string.gsub!(/^#{re_sep}|#{re_sep}$/i, '')
  end
  parameterized_string.downcase
end

def valid_categ?(categ)
  categ.to_i.to_s != categ
end
 
def parse_post_entries(feed, categ)
  posts = []
  feed.entries.each do |post|
    obj = Hash.new
    created_datetime = post.updated
    creation_date = Date.parse(created_datetime.to_s)
    title = post.title
    # file_name = creation_date.to_s + "-" + title.split(/  */).join("-").delete('\/') + ".html"
    file_name = parameterize(creation_date.to_s + "-" + title.split(/  */).join("-").delete('\/')) + ".markdown"
    content = post.content
    
    obj["file_name"] = file_name
    obj["title"] = title
    obj["creation_datetime"] = created_datetime
    obj["updated_datetime"] = post.updated
    obj["content"] = content
    obj["categories"] = "#{([categ] + post.categories.select{|x| valid_categ?(x) }).join(", ")}"
    obj["keywords"] = post.categories.join(",")
    posts.push(obj)
  end
  return posts
end
 
def write_posts(posts)
  Dir.mkdir("_posts") unless File.directory?("_posts")
 
  total = posts.length
  posts.each do |post|
    # file_name = "_posts/".concat(post["file_name"])
    file_name = "source/_posts/".concat(post["file_name"])
    header = %{---           
layout: post
post_title: #{post["title"].inspect}
date: #{post["creation_datetime"]}
updated: #{post["updated_datetime"]}
comments: true
categories: [#{post["categories"]}]
keywords: #{post["keywords"]}
tags: [#{post["keywords"]}]
---
 
}
    File.open(file_name, "w+") {|f|
      f.write(header)
      # f.write(post["content"])
      f.write(DownmarkIt.to_markdown(post["content"]))
      f.close
    }
    
  end
end
 
def main
  {
    "Blog-Cogley" =>  "http://rickcogley.blogspot.jp",
     "SnapJapan" => "http://snapjapan.blogspot.jp"
  }.each do |categ, feed_url|
    puts "Fetching feed #{feed_url}..."
    feed = Feedzirra::Feed.fetch_and_parse("#{feed_url}/feeds/posts/default?max-results=999")
  
    puts "Parsing feed..."
    posts = parse_post_entries(feed, categ)
  
    puts "Writing posts to _posts/..."
    write_posts(posts)
  end
  puts "Done!"
end
 
main()
