stages:
    - build
    - deploy
build:
    stage: build
    tags: 
    - <tag you provided while registering the token>
    script:
        - echo "Building package"
        - yarn build
        - echo "Build successful"
deploy_production:
    stage: deploy
    tags: 
      - <tag you provided while registering the token>
    script:
        - echo "Deploying to gh-pages"
        - yarn deploy
        - echo "Deployed"
    only:
        - master