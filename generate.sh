#!/bin/bash
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i https://openflagr.github.io/flagr/api_docs/bundle.yaml \
    -g typescript \
    -o /local \
    --additional-properties=npmName=flagr-typescript,platform=node
