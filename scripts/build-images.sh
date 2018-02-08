# defin project rootDirectory
rootDirectory=$(pwd)
# do loop for each microservice found into packages folder
for dir in $(ls -d  packages/*); do
  # go to microservice folder
  cd $dir
  # get service name
  servicename=$(pwd | sed 's#.*/##');
  # tag image
  TAG=0.1.$CIRCLE_BUILD_NUM
  # build docker image
  docker build -t registry.agenda.ch/nfz_test/$servicename:$TAG  .
  # login to docker hub
  docker login registry.agenda.ch -u $USER_DOCKER -p $PASS_DOCKER
  # push docker image
  docker push registry.agenda.ch/nfz_test/servicename:$TAG
  # return to rootDirectory project
  cd $rootDirectory
done

<<<<<<< d06b5ddff8682b893b6dff6feb152473db748485
#..
=======
##..
>>>>>>> ...
