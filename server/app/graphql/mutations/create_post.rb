module Mutations
  class CreatePost < BaseMutation
    field :post, Types::PostType, null: true

    argument :title, String, required: true
    argument :content, String, required: false

    argument :user_id, ID, required: true

    def resolve(**args)
      user = User.find(args[:user_id])
      post = user.posts.build(title: args[:title], content: args[:content])
      post.save
      { post: post }
    end
  end
end
