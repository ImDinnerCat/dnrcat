# DNRCAT
This is my own portfolio / linktree website.
The website was created with Next.JS and Bootstrap.





## Change user informations
To change your user information, you don't need to do anything except edit the `user.json`. The file is located in the `\public\` folder.


### Change username & title
If you want to change your username and title, you can do that with the `username` and `usertitle` key.
```JSON
{
  "username": "Username",
  "usertitle": "Hello world!"
}
```


### Change avatar & banner
To add your avatar and banner you need the `avatar` and `banner` key. Both work the same, here is an example using the `avatar` key. Note that both belong in the `img` key.
```JSON
{
  "img": {
    "avatar": {
      "src": "/assets/avatar.png",
      "height": "100%",
      "width": "auto",
      "transform": {
        "x": "0",
        "y": "0"
      }
    }
  }
}
```
We assume that your avatar has the aspect ratio 1 to 1. To make your avatar visible, you can set either `height` or `width` to `100%`. If your avatar would be wider than it is high, you could set the `height` to `100%`, and the `width` to `auto`. This way your avatar will be fully displayed. If your avatar would be higher than it is wide, then it would make sense the other way around.

By means of `transform` you can also position your avatar. You are completely free to choose which unit you want to use `rem`, `px`, `%` etc.


### Change 'about me'
If you want to change the contents of the "About me" item, you can do it with the key 'aboutMe'.
```JSON
{
  "aboutMe": [
    {
      "text": "Hello world",
      "icon": "fa-solid fa-globe"
    },

    {
      "text": "I'm a text",
      "icon": "fa-solid fa-satellite"
    }
  ]
}
```
`text` represents the normal text content, and `icon` would be a corresponding Font Awesome icon.


## Change social media links
You can easily change your social media links by editing them in the `socialMedia` key.
```JSON
{
  "socialMedia": [
    {
      "type": "github",
      "link": "https://github.com/username"
    },

    {
      "type": "discord",
      "link": "https://discordapp.com/users/ID"
    }
  ]
}
```
`link` is the link to your social media account, `type` is then the corresponding platform.

#### The following social media platforms are supported:
- GitHub: `github`
- Discord: `discord`
- Reddit: `reddit`
- Instagram: `instagram`
- Facebook: `facebook`
- Twitter: `twitter`
- YouTube: `youtube`





## Change / add projects
If you want to edit your project list, you can easily edit the `projects.json` from the `\public\` folder.

So you don't have to change anything directly in the Next.JS files in the source folder. Unless you want to customize something or change the design.



### This is how `projects.json` works
By default, the `projects.json` looks like this:
```JSON
[
  {
    "title": "Project A",
    "text": "Short description or explanation",
    "link": "https://project.com/",
    "logo": "/assets/project-a/logo.png"
  },
  
  {
    "title": "Project B",
    "text": "Short description or explanation",
    "link": "https://project.com/",
    "logo": "/assets/project-b/logo.png"
  }
]
```
This is how the `projects.json` works. If you now want to add a project, you can simply add a new array and use the corresponding keys.


#### Basic project information
```JSON
{
  "title": "Project Name",
  "text": "Short description or explanation about the project.",
  "link": "https://project-link.com/",
  "logo": "/assets/project/logo.png"
}
```


#### Use a background image
```JSON
{
  "title": "Project Name",
  "background": "/assets/project/background.png"
}
```

#### Use labels
You can define the colors of the labels either with HEX code, or with the words `success = green`, `info = blue`, `warning = orange` or `danger = red`. To set the color, just use the `background` key.

Optionally you can also add an icon to the label. You can choose the icons from Font Awesome. Just enter the content of the class.
```JSON
{
  "title": "Project Name",
  "labels": [
    {
      "text": "I'm a label",
      "icon": "fa-solid fa-crown",
      "background": "#34495e"
    },
    
    {
      "text": "Hello world!",
      "icon": "fa-solid fa-globe",
      "background": "danger"
    }
  ]
}
```





## License
Basically, the license is Creative Commons BY-NC-SA.

This means that you can use the website for yourself, you can also make changes. But you have to leave my name in the footer. You are not allowed to sell the project and you are only allowed to redistribute it under the same conditions (CC BY-NC-SA).