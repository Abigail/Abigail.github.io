BIN     = Bin
DATA    = Data/Sports
JS      = JavaScript/Sports
HTML    = HTML/Sports
SRC     = Src/Sports
SS      = Speedskating
DATA_SS = $(DATA)/$(SS)
JS_SS   = $(JS)/$(SS)
HTML_SS = $(HTML)/$(SS)
SRC_SS  = $(SRC)/$(SS)
ATHLETE = $(BIN)/athletes.pl
FLAGS   = $(BIN)/flags.pl
VENUES  = $(BIN)/venues.pl
MD2HTML = $(BIN)/make-blogs


all: $(JS_SS)/skaters.js $(JS_SS)/rinks.js $(JS)/Flags_Data.js \
     $(HTML_SS)/index.html $(HTML_SS)/records.html

$(HTML_SS)/index.html: $(SRC_SS)/index.md
	$(MD2HTML) $(SRC_SS)/index.md
$(HTML_SS)/records.html: $(SRC_SS)/records.md
	$(MD2HTML) $(SRC_SS)/records.md

$(JS_SS)/skaters.js: $(DATA_SS)/skaters.txt $(ATHLETE)
	$(ATHLETE) --input $(DATA_SS)/skaters --output $(JS_SS)/skaters
$(JS_SS)/rinks.js: $(DATA_SS)/rinks.txt $(VENUES)
	$(VENUES) --input $(DATA_SS)/rinks --output $(JS_SS)/rinks
$(JS)/Flags_Data.js: $(DATA)/flags.txt $(FLAGS)
	$(FLAGS) --input $(DATA)/flags --output $(JS)/Flags_Data
