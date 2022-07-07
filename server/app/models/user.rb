class User < ApplicationRecord
    has_many :belong_to_groups
    has_many :groups, through: :belong_to_groups, source: :group
    has_many :posts
end
