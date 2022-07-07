module Mutations
    class CreateComment < BaseMutation
      field :comment, Types::CommentType, null: true

      argument :name, String, required: true

      argument :post_id, ID, required: true

      def resolve(**args)
        post = Post.find(args[:post_id])
        comment = post.comments.build(name: args[:name])
        comment.save
        { comment: comment }
      end
    end
  end
