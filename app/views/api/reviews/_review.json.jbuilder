json.extract! review, :id, :business_id, :user_id, :rating, :content, :user
json.created_at review.created_at.strftime("%m/%d/%Y %l:%M%p")
