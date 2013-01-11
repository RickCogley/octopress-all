# encoding: utf-8
#
# Jekyll choose blog page generator.
# http://recursive-design.com/projects/jekyll-plugins/
#
# Version: 0.0.1 (20120104)
#
# Copyright (c) 2012 Paul Ser
# Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
#
# A generator that creates blog choose pages for jekyll sites.
#


# Included filters :
# - category_links:      Outputs the list of categories as comma-separated <a> links.
# - date_to_html_string: Outputs the post.date as formatted html, with hooks for CSS styling.
#
# Available _config.yml settings :
# - category_dir:          The subfolder to build category pages in (default is 'categories').
# - category_title_prefix: The string used before the category name in the page title (default is
#                          'Category: ').

module Jekyll

  # The BlogIndex class creates a single category page for the specified category.
  class BlogIndex < Page

    # Initializes a new CategoryIndex.
    #
    #  +base+         is the String path to the <source>.
    #  +category_dir+ is the String path between <source> and the category folder.
    #  +category+     is the category currently being processed.
    def initialize(site, base, category_dir, category, desc)
      @site = site
      @base = base
      @dir  = category_dir
      @name = 'index.html'
      self.process(@name)
      # Read the YAML data from the layout page.

      self.read_yaml(File.join(base, '_layouts'), 'blog_index.html')
      self.data['category']    = category
      # Set the title for this page.
      self.data['title']       = desc[0]
      self.data['small_title'] = desc[-1]
      # Set the meta-description for this page.
      self.data['description'] = "Blog: #{desc[0]}"
    end

  end

  # The CategoryFeed class creates an Atom feed for the specified category.
  class BlogFeed < Page

    def initialize(site, base, category_dir, category)
      @site = site
      @base = base
      @dir  = category_dir
      @name = 'atom.xml'
      self.process(@name)
      # Read the YAML data from the layout page.
      self.read_yaml(File.join(base, '_includes/custom'), 'category_feed.xml')
      self.data['category']    = category
      # Set the title for this page.
      self.data['title']       = "#{category}"
      # Set the meta-description for this page.
      self.data['description'] = "Blog: #{category}"
      # Set the correct feed URL.
      self.data['feed_url'] = "#{category_dir}/#{name}"
    end

  end

  # The Site class is a built-in Jekyll class with access to global site config information.
  class Site

    # Creates an instance of CategoryIndex for each category page, renders it, and
    # writes the output to a file.
    #
    #  +category_dir+ is the String path to the category folder.
    #  +category+     is the category currently being processed.
    def write_blog_index(blog_dir, desc, category)

      index = BlogIndex.new(self, self.source, blog_dir, category, desc)
      index.render(self.layouts, site_payload)
      index.write(self.dest)
      # Record the fact that this page has been added, otherwise Site::cleanup will remove it.
      self.pages << index

      # Create an Atom-feed for each index.
      feed = BlogFeed.new(self, self.source, blog_dir, category)
      feed.render(self.layouts, site_payload)
      feed.write(self.dest)
      # Record the fact that this page has been added, otherwise Site::cleanup will remove it.
      self.pages << feed
    end

    # Loops through the list of category pages and processes each one.
    def write_blogs_indexes
      if self.layouts.key? 'blog_index'
        {
	 'snapjapan' => ['SnapJapan', 'Snap!Japan - Japan in a Snap!', "A 20-year resident's perspective."], 
	 'blog-cogley' => ['Blog-Cogley', "blog:Cogley", "Rick Cogley's journal on life tuning, productivity and management."]
	}.each do |blog_name, desc|
          category = desc.shift
          self.write_blog_index(blog_name, desc, category)
        end

      # Throw an exception if the layout couldn't be found.
      else
        throw "No 'blogs_index' layout found."
      end
    end

  end


  # Jekyll hook - the generate method is called by jekyll, and generates all of the category pages.
  class GenerateBlogsChoose < Generator
    safe true
    priority :low

    def generate(site)
      site.write_blogs_indexes
    end

  end


end

