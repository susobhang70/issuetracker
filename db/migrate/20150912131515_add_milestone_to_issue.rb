class AddMilestoneToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :milestone, :string
  end
end
