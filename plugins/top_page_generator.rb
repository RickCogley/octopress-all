module Jekyll

  # The BlogIndex class creates a single category page for the specified category.
  class TopPage < Page

    def initialize(site, base)
      @site = site
      @base = base
      @dir  = '/'
      @name = 'index.html'
      self.process(@name)
      # Read the YAML data from the layout page.
      self.read_yaml(File.join(base, '_layouts'), 'top_page.html')
      self.data['featured_category'] = 'Featured'
      # Set the meta-description for this page.
      self.data['description'] = "Rick Cogley's blog"
    end

  end

  
  # The Site class is a built-in Jekyll class with access to global site config information.
  class Site

    # Loops through the list of category pages and processes each one.
    def write_top_page
      if self.layouts.key? 'top_page'
        index = TopPage.new(self, self.source)
        index.render(self.layouts, site_payload)
        index.write(self.dest)
        # Record the fact that this page has been added, otherwise Site::cleanup will remove it.
        self.pages << index
      else
        throw "No 'top_page' layout found."
      end
    end

  end


  # Jekyll hook - the generate method is called by jekyll, and generates all of the category pages.
  class GenerateTopPage < Generator
    safe true
    priority :low

    def generate(site)
      site.write_top_page()
    end

  end

end