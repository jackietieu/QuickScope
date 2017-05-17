require 'rails_helper'

RSpec.describe Api::BusinessesController, type: :controller do
  describe "GET #show" do
    it "renders the business page" do
      get :show

      expect(response).to render_template("show")
      expect(response).to have_http_status(200)
    end
  end
end
