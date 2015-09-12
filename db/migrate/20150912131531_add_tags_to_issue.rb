class AddTagsToIssue < ActiveRecord::Migration
  def change
    add_column :issues, :tags, :string
  end
end
