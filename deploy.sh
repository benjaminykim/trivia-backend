#!/bin/bash
USAGE=\
"USAGE:\n\n"\
"\tdev:\t\tstart backend server w/ containerized db.\n\t\t\t-f to display logs\n"\
"\tprod:\t\tstart backend server w/ containerized db, nginx, tls.\n\t\t\t-f to display logs\n"\
"\tlogs:\t\tstart logging. Requires second param [ 'prod' | 'dev' ]\n"\
"\trefresh:\tclears all Docker volumes, images, and containers\n"\
"\tshell:\t\texecutes SH as run command for the api container\n"\
"\ttest:\t\texecutes testing via npm jest\n"\
"\tdb:\t\texecutes postgres for the db container\n"

ARG=$1
ARG_2=$2
DIR="docker/"
CMD="docker-compose -f docker-compose.yml"


if [ -z $ARG ]
then
    echo -e $USAGE;
    exit 0;
elif [ $ARG = "help" ]
then
    echo -e $USAGE;
elif [ $ARG = "dev" -o $ARG = "prod" ]
then
    echo "Deploying ${ARG}...";
    sudo ${CMD} -f ${DIR}${ARG}.yml down;
    sudo ${CMD} -f ${DIR}${ARG}.yml up --build;
    if [ -z $ARG_2 ]
    then
        echo "Finished";
    elif [ $ARG_2 = "-f" ]
    then
        ${CMD} -f ${DIR}${ARG}.yml logs -f;
    fi
    exit 0;
elif [ $ARG = "logs" ]
then
    echo "Running Logs...";
    if [ -z $ARG_2 ]
    then
        echo "logs options | prod | dev |"
    else
        ${CMD} -f ${DIR}${ARG_2}.yml logs -f;
    fi
    exit 0;
elif [ $ARG = "refresh" ]
then
    echo "Clearing Docker builds";
    docker stop $(docker ps -aq);
    docker rm $(docker ps -aq);
    docker rmi $(docker images -q);
    docker system prune --all --force --volumes;
elif [ $ARG = "test" ]
then
    ${CMD} -f ${DIR}${ARG}.yml up --build;
elif [ $ARG = "shell" ]
then
    docker exec -it api sh;
elif [ $ARG = "db" ]
then
    docker exec -it db -U username -h 127.0.0.1 -p 5432 db;
elif [ $ARG = "seed" ]
then
    ${CMD} -f ${DIR}${ARG}.yml up;
else
    echo -e $USAGE;
fi

