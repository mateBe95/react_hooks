stages:
    - build
    - deploy
build:
    stage: build
    script:
        - echo "Building package"
        - yarn build
        - echo "Build successful"
deploy_production:
    stage: deploy
    script:
        - echo "Deploying to gh-pages"
        - yarn deploy
        - echo "Deployed"
    only:
        - master