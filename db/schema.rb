# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160906053603) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string   "name",                                                                                                                                                                 null: false
    t.float    "lat",                                                                                                                                                                  null: false
    t.float    "lng",                                                                                                                                                                  null: false
    t.string   "profile_image_url",  default: "http://res.cloudinary.com/dnmknegr2/image/upload/c_fill,g_xy_center,h_50,w_50,x_0,y_0/v1473119089/unsplash_527bf4b4ae00d_1_bjl0cq.jpg"
    t.datetime "created_at",                                                                                                                                                           null: false
    t.datetime "updated_at",                                                                                                                                                           null: false
    t.string   "street_address",                                                                                                                                                       null: false
    t.string   "city_state_address",                                                                                                                                                   null: false
  end

  add_index "businesses", ["name"], name: "index_businesses_on_name", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "business_id", null: false
    t.integer  "user_id",     null: false
    t.float    "rating",      null: false
    t.string   "content",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["business_id"], name: "index_reviews_on_business_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "business_id"
    t.integer  "tag_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "taggings", ["business_id"], name: "index_taggings_on_business_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                                                 null: false
    t.string   "password_digest",                                                                                                                                          null: false
    t.string   "session_token",                                                                                                                                            null: false
    t.string   "profile_image_url", default: "http://res.cloudinary.com/dnmknegr2/image/upload/c_scale,r_0,w_40/v1472882627/blank-profile-picture-973460_1280_eg7exu.png"
    t.datetime "created_at",                                                                                                                                               null: false
    t.datetime "updated_at",                                                                                                                                               null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
