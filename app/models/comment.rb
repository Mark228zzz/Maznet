class Comment < ApplicationRecord
    validates_presence_of :title, :user_name
end
