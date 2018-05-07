require 'sinatra/json'
require 'json'

class CompaniesController < Bootstrap

    get '/api/companies\.json' do
        content_type :json
        @companies = Company.all
        @companies.to_json
    end

    post '/api/companies\.json' do
        content_type :json
        @company = Company.create cvr: @body[:cvr],
                                  name: @body[:name],
                                  address: @body[:address],
                                  city: @body[:city],
                                  country: @body[:country],
                                  phone: @body[:phone]
        if @company.valid?
            status 201
            json response: {
                status: :created,
                errors: [],
                data: @company,
                request: @body
            }
        else
            status 400
            json response: {
                status: :fail,
                errors: @company.errors,
                data: [],
                request: @body
            }
        end
    end

    get '/api/companies/:id\.json' do
        content_type :json
        @company = Company.find_by id: params[:id]
        if @company
            status 200
            json response: {
                status: :ok,
                errors: [],
                data: @company,
                request: params
            }
        else
            status 404
            json response: {
                status: :not_found,
                errors: [
                    "Company #{params[:id]} does not exist"
                ],
                data: [],
                request: params
            }
        end
    end
end