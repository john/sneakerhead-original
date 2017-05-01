module Api::V1
  class SearchController < Api::ApplicationController

    # skip_before_action :authenticate_user!

    # https://affiliate-program.amazon.com/gp/advertising/api/detail/your-account.html
    def create
      # put these in an initializer
      Amazon::Ecs.configure do |options|
        options[:AWS_access_key_id] = ENV['AWS_ACCESS_KEY_ID']
        options[:AWS_secret_key] = ENV['AWS_SECRET_KEY']
        options[:associate_tag] = ENV['AWS_ASSOCIATE_TAG']
      end

      # require 'json'

      output = []
      res = Amazon::Ecs.item_search(params[:query], :search_index => 'All')
      res.items.each do |item|
        #logger.debug(item)

        asin = item.get('ASIN')
        url = item.get('DetailPageURL')
        item_attributes = item.get_element('ItemAttributes')
        title = item_attributes.get('Title')

        output << {asin: asin, title: title, url: url }
      end

      render json: {results: output}.to_json
    end


    # private
    #
    # def search_params
    #   params.require(:search).permit(:query)
    # end

  end
end