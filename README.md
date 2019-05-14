# whatsapp-web-electron
A simple electron wrapper for whatsapp web

Since the Whatsapp Client for Linux stopped working, I decided to wrap it using electron.

I really feel very dumb by doing this, but I had this problem, so maybe it could help other people with the same problem.

## Dependencies
This is a wrapper made in electron, it is recommended you first [install it](https://github.com/electron/electron).

## Installation
In order to download it, reproduce these steps:
```
# go to home directory (you can change it if you want to)
cd ~
# clone this repo
git clone https://github.com/Pucinelli/whatsapp-web-electron.git

# (optional) put it on your /usr/bin/ dir or another directory in your $PATH variable
# if any of these fail, enter as `sudo su`
echo "electron ~/whatsapp-web-electron/main" > /usr/bin/whatsapp-web-electron
chmod 755 /usr/bin/whatsapp-web-electron
```

## Usage
If you did the optional step of the instalation, you can just call it in your terminal with `whatsapp-web-electron`, from this you can put it in your desktop menu or whatever you want.

If not, you can call it with `~/whatsapp-web-electron/main` (this supposes you cloned this repo in your home)