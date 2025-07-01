all: trapped 

SRC   = trapped parse moves heatmap layout
SRC_C = $(addsuffix .c, $(SRC))
SRC_H = $(addsuffix .h, $(SRC))

trapped: $(SRC_C) $(SRC_H)
	gcc -o $@ $(SRC_C)

parse: parse.c moves.h moves.c
	gcc -o parse parse.c moves.c
