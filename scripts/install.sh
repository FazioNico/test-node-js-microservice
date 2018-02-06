# defin project rootDirectory
rootDirectory=$(pwd)
# do loop for each microservice found into packages folder
for dir in $(ls -d  packages/*); do
  # go to microservice folder
  cd $dir
  echo "---> $(pwd | sed 's#.*/##')"
  # install project dependencies
  npm install
  # return to rootDirectory project
  cd $rootDirectory
done
