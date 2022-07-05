class Group < ApplicationRecord
    has_many :belong_to_groups
    has_many :users, through: :belong_to_groups, source: :user
end
