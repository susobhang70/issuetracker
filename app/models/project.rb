class Project < ActiveRecord::Base
	has_many :issues

	def as_json(options = {})
		super(options.merge(include: :issues))
	end
end
