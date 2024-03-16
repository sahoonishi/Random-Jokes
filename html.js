let MYjoke = 
     [
        {
            "category": "Dark",
            "type": "single",
            "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 152,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "safe": false,
            "id": 274,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 237,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 138,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I was going to tell a dead baby joke. But I decided to abort.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 207,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 208,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "Dark humor is like food, not everyone gets it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": true
            },
            "id": 162,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "Me and my Jewish friend were eating lunch and I farted. He got mad so I said \"cmon man a little gas never killed anyone\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": true
            },
            "id": 103,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 96,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 133,
            "safe": false,
            "lang": "en"
        }
    ]

btn.onclick=function(){
let index = Math.floor(Math.random()*(MYjoke.length-1));
joke1.innerHTML = MYjoke[index].joke;
}