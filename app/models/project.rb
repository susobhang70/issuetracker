class Project < ActiveRecord::Base
	belongs_to :user
	has_many :issues

  	def as_json(options = {})
    	super(options.merge(include: [:user, issues: {include: :user}]))
  	end	
end
