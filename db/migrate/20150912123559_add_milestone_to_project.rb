class AddMilestoneToProject < ActiveRecord::Migration
  def change
    add_column :projects, :milestone, :string
  end
end
