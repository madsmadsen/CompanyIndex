require './api/bootstrap'

(Dir['./api/models/*.rb'].sort).each do |model|
    require model
end

(Dir['./api/controllers/*.rb'].sort).each do |controller|
    require controller
end

map "/" do
    run CompaniesController
end