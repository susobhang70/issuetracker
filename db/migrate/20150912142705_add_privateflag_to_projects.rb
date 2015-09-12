class AddPrivateflagToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :privateflag, :boolean
  end
end
