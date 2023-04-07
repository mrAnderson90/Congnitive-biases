install:
	npm install

lint:
	npx stylelint ./app/scss/**/*.scss
	npx htmlhint ./app/*.html

sass:
	npx sass ./app/scss/app.scss ./build/styles/app.css

deploy:
	npx surge ./build/
