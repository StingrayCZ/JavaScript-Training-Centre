# Git Notes

```javascript
git init -b main
// init - slozka je sledovana
// -b - branch (slozka)
// main - master
```

```javascript
git config --global user.name "Jaromir Baca"
```

```javascript
git config --global user.email "jaromirbaca88@gmail.com"
```

## Pridani souboru
```javascript
echo hello world>hello.txt
// inicializace obsah>nazevsouboru.domena
```
nebo...
```javascript
touch test>Test.html
```

## Smazani souboru
```javascript
del <jmeno soubrou>
del <jmeno soubrou>
```

## Commit
```javascript
git commint -m "text"
"m-message"
```

## Git Push - odeslani na repo
```javascript
git push -u origin main
```

## Vytvoreni nove vetve
```javascript
gir branch -c feature
// c - create
```

## Historie
```javascript
git log --oneline
```

## Merge
```javascript
git switch <name> // prepnuti na branch
git merge main    // data z main do <name>
```

## Git Stash
git-stash - Stash the changes in a dirty working directory away

```javascript
git stash list [<log-options>]
git stash show [-u|--include-untracked|--only-untracked] [<diff-options>] [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-S|--staged] [-k|--[no-]keep-index] [-q|--quiet]
	     [-u|--include-untracked] [-a|--all] [-m|--message <message>]
	     [--pathspec-from-file=<file> [--pathspec-file-nul]]
	     [--] [<pathspec>…​]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>
```

## Git Diff
```javascript
git diff
```

```javascript
// EXIT
q + Enter
```