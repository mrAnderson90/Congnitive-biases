install:
	npm install

lint:
	npx stylelint ./app/styles/*.css
	npx stylelint ./app/styles/**/*.scss
	npx htmlhint ./app/*.html

sass:
	npx sass ./app/scss/app.scss ./build/styles/app.css

deploy:
	npx surge ./build/
