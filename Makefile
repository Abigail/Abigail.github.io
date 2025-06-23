BIN        := Bin
DATA       := Data/Sports
JS         := JavaScript/Sports
HTML       := HTML/Sports
SRC        := Src/Sports
SS         := Speedskating
DATA_SS    := $(DATA)/$(SS)
RECORDS_SS := $(DATA_SS)/Records
JS_SS      := $(JS)/$(SS)
HTML_SS    := $(HTML)/$(SS)
SRC_SS     := $(SRC)/$(SS)
ATHLETE    := $(BIN)/athletes.pl
COUNTRIES  := $(BIN)/countries.pl
VENUES     := $(BIN)/venues.pl
RECORDS    := $(BIN)/records.pl
MD2HTML    := $(BIN)/make-blogs
RECORDS_IN := $(wildcard ${RECORDS_SS}/*.txt)


all: $(JS_SS)/skaters.js $(JS_SS)/rinks.js $(JS)/Country_Data.js \
     $(HTML_SS)/index.html $(HTML_SS)/records.html \
     $(JS_SS)/record_progression.js

$(HTML_SS)/index.html: $(SRC_SS)/index.md
	$(MD2HTML) $(SRC_SS)/index.md
$(HTML_SS)/records.html: $(SRC_SS)/records.md
	$(MD2HTML) $(SRC_SS)/records.md

$(JS_SS)/skaters.js: $(DATA_SS)/skaters.txt $(ATHLETE)
	$(ATHLETE) --input $(DATA_SS)/skaters --output $@
$(JS_SS)/rinks.js: $(DATA_SS)/rinks.txt $(VENUES)
	$(VENUES) --input $(DATA_SS)/rinks --output $@
$(JS)/Country_Data.js: $(DATA)/country.txt $(COUNTRY_FLAGS)
	$(COUNTRY_FLAGS) --input $< --output $@
$(JS_SS)/record_progression.js: $(RECORDS_IN) $(RECORDS)
	$(RECORDS) --input-dir $< --output $@

