Make a personalized word cloud of all your chats!
every chat ever chatted straight out of the database into your warm embrace.

Use [`!discord`](/commands/#info) to invite yourself to the Discord server,
and see your personal art in all its glory.

If you want to highlight specific words in your messages,
use the following format in the redeem message:

```
regex:{expression} color:#RRGGBB
```

| Option               | Description                                                                                                                                                    |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `regex:{expression}` | Provide for `expression` a valid [regular expression](https://docs.python.org/3/library/re.html#regular-expression-syntax) between the `{` and `}` delimiters. |
| `color:#RRGGBB`      | Provide an [RGB hexadecimal color notation](https://drafts.csswg.org/css-color/#hex-notation) between `#000000` and `#FFFFFF`.                                 |

As an example, the [following expression](https://regex101.com/r/JMdZQk/1) makes all mentions of `Red Epicness` turn his signature brownish red color.

```
regex:{Red.Epicness} color:#FF4400
```

* https://docs.python.org/3/library/re.html#regular-expression-syntax
* https://regex101.com/
* https://drafts.csswg.org/css-color/#hex-notation