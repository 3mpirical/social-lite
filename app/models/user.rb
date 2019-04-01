# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :sent_messages, class_name: "Message", foreign_key: "from_user_id", dependent: :destroy
  has_many :received_messages, class_name: "Message", foreign_key: "to_user_id", dependent: :destroy

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

  serialize :friends, Array

  def self.add_friend(user, friend_id)
    if(user.friends.length > 0)
      user.friends.each() {|current_friend_id|
        return false if current_friend_id === friend_id
      }
    end

    user.friends.push(friend_id)
    user.save()
    
    new_friend = User.find(friend_id);
    new_friend.friends.push(user.id)
    new_friend.save()
    return true
  end

  def self.remove_friend(user, friend_id)
    user.friends.reject!() {|user_id|
      user_id == friend_id
    }
    user.save()

    old_friend = User.find(friend_id);
    old_friend.friends.reject!() {|user_id|
      user_id == user.id
    }
    old_friend.save()
  end

  def get_friends
    friend_array = []

    self.friends.each() {|friend_id|
      friend_array.push(User.find(friend_id));
    }
    return friend_array
  end 

  def self.search_users(input)
    User.find_by_sql(["
      SELECT * FROM users
      WHERE name ILIKE ?
    ", "#{input}%" ])
  end

  def delete_user
    self.friends.each() {|user_id|
      friend = User.find(user_id)
      friend.friends.reject!() {|user_id| user_id == self.id }
      friend.save()
    }
    self.delete()
  end
end
