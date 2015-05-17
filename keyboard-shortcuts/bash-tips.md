#Bash tips and tricks

A set of useful tricks using bash that can simply one's life.

Expansion   

```
$ echo bao{web,eweb,team,grid}
baoweb baoeweb baoteam baogrid
```

Repeat last command

```
$ cp hosts hosts.old
-- results in access denied
sudo !!
$ -- !! repeats the action

```

Going back after cd

```
$ cd /etc
-- changes directory to /etc
$ cd -
-- changes directory to where I was

```