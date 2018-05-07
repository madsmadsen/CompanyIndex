class Company < ActiveRecord::Base
    validates :cvr, :name, :address, :city, :country, presence: true
    validates :cvr, uniqueness: true
end