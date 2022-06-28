module Mutations
  class DeleteUser < BaseMutation
    field :user, Types::UserType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      user = User.find(id)
      user.destroy
      { user: user }
    end
  end
end
