

User.destroy_all()

backgrounds = ["metro", "flower", "glacier", "street", "overpass", "mountains", "control"];


user_one = User.create(
    name: "Alan Turing",
    image: Faker::Avatar.image(),
    messaging_background: backgrounds[rand(0..6)],
    email: "test@test.com",
    password: "password"
)

user_two = User.create(
    name: "Maynard Keynes",
    image: Faker::Avatar.image(),
    messaging_background: backgrounds[rand(0..6)],
    email: "fake@fake.com",
    password: "password"
)

User.add_friend(user_one, user_two);


for i in (1..10)
    Message.create(
        from_user_id: user_one.id,
        to_user_id: user_two.id,
        text: "Text..........",
    )

    post = Post.create(
        user_id: user_one.id,
        mood: "happy",
        text: "POST TEXT",
    )

    for i in (1..4)
        Comment.create(
            user_id: user_one.id,
            post_id: post.id,
            text: "COMMENT TEXT",
        )
    end
end

for i in (1..10)
    Message.create(
        from_user_id: user_two.id,
        to_user_id: user_one.id,
        text: "Text..........",
    )

    post = Post.create(
        user_id: user_two.id,
        mood: "happy",
        text: "POST TEXT",
    )

    for i in (1..4)
        Comment.create(
            user_id: user_two.id,
            post_id: post.id,
            text: "COMMENT TEXT",
        )
    end
end


puts "_____Database_Seeded_____"