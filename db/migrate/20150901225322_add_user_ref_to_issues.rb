class AddUserRefToIssues < ActiveRecord::Migration
  def change
    add_reference :issues, :user, index: true, foreign_key: true
  end
end
