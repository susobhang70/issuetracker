class AddMembersToProject < ActiveRecord::Migration
  def change
    add_column :projects, :members, :string
  end
end
