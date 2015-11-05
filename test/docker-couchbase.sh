#!/bin/bash
set -ev

docker pull $COUCHBASE

docker run -d -p 8091:8091 $COUCHBASE

CONTAINER_IP=`docker ps | awk 'NR==2{print $1}'`

docker ps

echo $CONTAINER_IP

docker run --rm --entrypoint=/opt/couchbase/bin/couchbase-cli $COUCHBASE \
bucket-create -c $CONTAINER_IP:8091 \
       --bucket=default \
       --bucket-type=couchbase \
       --bucket-port=11211 \
       --bucket-ramsize=200 \
       --bucket-replica=1 \
       -u Administrator -p password \
