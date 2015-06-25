require 'sinatra'
require 'json'

#class HelloWorldApp < Sinatra::Base
  get '/' do
    "Hello, world!"
  end

  get '/getData' do
    headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST'] 
    content_type :json
    headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST'] 
    data = { :name => 'Mike', :age => 70 }
    data.to_json
  end
#end
