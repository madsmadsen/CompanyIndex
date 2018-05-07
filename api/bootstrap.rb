require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/base'
require 'yaml'

class Bootstrap < Sinatra::Base

    set :root, File.dirname(__FILE__)
    env = ENV['RACK_ENV'] || 'development'
    config = YAML.load(File.read(File.join(settings.root, '..', 'config', 'database.yml')))
    ActiveRecord::Base.configurations = config
    ActiveRecord::Base.establish_connection env.to_sym

    set :public_folder, File.join(settings.root, '..', 'app')

    before do
        if request.content_length.to_i > 0
            request.body.rewind
            @body = JSON.parse request.body.read, symbolize_names: true
        end
    end

    get '/' do
        File.read(File.join(settings.root, '..', 'app', 'index.html'))
    end
end