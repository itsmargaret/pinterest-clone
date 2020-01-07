class User < ApplicationRecord
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true 
    before_validation :ensure_session_token

    attr_reader :password 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
        self.password_digest
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64 
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64 
        self.save!
    end 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
        nil 
    end 
end
