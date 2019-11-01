function push(){
    git add .
    git commit -a -m "$*"
    git push origin master
}