module Types
  class MutationType < Types::BaseObject
    field :delete_user, mutation: Mutations::DeleteUser
    field :update_user, mutation: Mutations::UpdateUser
    field :create_user, mutation: Mutations::CreateUser

    field :create_post, mutation: Mutations::CreatePost

    field :create_comment, mutation: Mutations::CreateComment
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
