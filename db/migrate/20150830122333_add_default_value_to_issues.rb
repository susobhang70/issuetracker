class AddDefaultValueToIssues < ActiveRecord::Migration
  def change
    change_column_default :issues, :upvotes, 0
  end
end
