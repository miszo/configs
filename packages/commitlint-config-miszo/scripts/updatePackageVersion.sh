#!/usr/bin/env bash
echo "Get version from package.json"

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')
echo "Extracted version: ${PACKAGE_VERSION}"

# Get the Sonar properties file
SONAR_FILE=$(find ./ -iname sonar*.properties -type f)
echo "Sonar file found: ${SONAR_FILE}"

# Update the version
SONAR_REPLACE="^sonar.projectVersion=.*$"
SONAR_WITH="sonar.projectVersion=${PACKAGE_VERSION}"

sed -i.bak "s#${SONAR_REPLACE}#${SONAR_WITH}#g" ${SONAR_FILE}

echo "Done!"
