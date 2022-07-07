module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :users, [Types::UserType], null: false
    field :groups, [Types::GroupType], null: true
    field :posts, PostType.connection_type, null: false
    field :comments, [Types::CommentType], null: false

    def users
      User.all
    end
    def posts
      Post.all
    end
    def comments
      Comment.all
    end
  end
end
