
SRC = $(wildcard lib/*.js)

UNAME := $(shell uname)

ifeq ($(UNAME), Linux)
	OPEN=gnome-open
endif
ifeq ($(UNAME), Darwin)
	OPEN=open
endif

build: components $(SRC) component.json
	@(node _ise_/build && touch components)

three-random-cubes.js: components
	@component build --standalone three-random-cubes --name three-random-cubes --out .

components: component.json
	@(component install --dev && touch components)

clean:
	rm -fr build components template.js _ise_/build/backup

component.json: $(SRC)
	@node _ise_/build/auto-update-file-list

test: build
	$(OPEN) test/index.html

demo: build
	$(OPEN) examples/index.html

.PHONY: clean three-random-cubes.js test
