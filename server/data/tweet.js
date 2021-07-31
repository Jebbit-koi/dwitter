let tweets = [
    {
        id: '1',
        text: '코이는 오늘도 뚠뚠',
        createdAt: Date.now().toString(),
        name: '코이는귀여워',
        username: 'koi',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: '2',
        text: '서버 재밌다',
        createdAt: Date.now().toString(),
        name: '코이언니',
        username: 'jebbit',
    }
];

export async function getAll() {
    return tweets;
}

export async function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username === username) 
}

export async function getById(id) {
    return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    }
    tweets = [tweet, ...tweets];
    return tweet;
}

export async function update(id, text) {
    const tweet =  tweets.find((tweet) => tweet.id === id );
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}

export async function remove(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id);

}